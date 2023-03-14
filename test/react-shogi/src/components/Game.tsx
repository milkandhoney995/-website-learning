import React from 'react';
import { Piece, Blank, Osho, Fu, Gin, Kin, Kyosha, Kaku, Hisha, Keima } from './Pieces'
import { Board, Stand } from './BoardInfo';
import { Setting } from '../setting';


export function makePieces(sfen="lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1", language='Ja') {
  let pieces: Piece[][] = []

  if (sfen === "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1") {
    // 1段目
    pieces[0] = [
      new Kyosha('first', 1, 1),
      new Keima('first', 2, 1),
      new Gin('first', 3, 1),
      new Kin('first', 4, 1),
      new Osho('first', 5, 1),
      new Kin('first', 6, 1),
      new Gin('first', 7, 1),
      new Keima('first', 8, 1),
      new Kyosha('first', 9, 1),
    ]
    // 2段目
    pieces[1] = [
      new Blank('first', 1, 2),
      new Kaku('first', 2, 2),
      new Blank('first', 3, 2),
      new Blank('first', 4, 2),
      new Blank('first', 5, 2),
      new Blank('first', 6, 2),
      new Blank('first', 7, 2),
      new Hisha('first', 8, 2),
      new Blank('first', 9, 2),
    ]
     // 3段目と7段目
    for (let i = 0; i < Setting.LENGTH; i++) {
      pieces[2][i] = new Fu('first', 1 + i, 3)
      pieces[6][i] = new Fu('second', 1 + i, 7)
    }

    // 4~6段目
    for (let i = 0; i < Setting.LENGTH; i++) {
      pieces[3][i] = new Fu('first', 1 + i, 4)
      pieces[4][i] = new Fu('second', 1 + i, 5)
      pieces[5][i] = new Fu('second', 1 + i, 6)
    }
    // 8段目
    pieces[7] = [
      new Blank('second', 1, 8),
      new Hisha('second', 2, 8),
      new Blank('second', 3, 8),
      new Blank('second', 4, 8),
      new Blank('second', 5, 8),
      new Blank('second', 6, 8),
      new Blank('second', 7, 8),
      new Kaku('second', 8, 8),
      new Blank('second', 9, 8),
    ]
    // 9段目
    pieces[8] = [
      new Kyosha('second', 1, 9),
      new Keima('second', 2, 9),
      new Gin('second', 3, 9),
      new Kin('second', 4, 9),
      new Osho('second', 5, 9),
      new Kin('second', 6, 9),
      new Gin('second', 7, 9),
      new Keima('second', 8, 9),
      new Kyosha('second', 9, 9),
    ]
  }

  return pieces
}

interface GamePropsInterface {
  start_pos: Piece[][]
  squares: Array<string>
}
interface GameStateInterface {
  start_pos: Piece[][]
  history: Array<{ [field: string]: string[]}>
  xIsNext: boolean
  stepNumber: number
}

class Game extends React.Component<GamePropsInterface, GameStateInterface> {
  constructor(props: GamePropsInterface) {
    super(props)
    this.state = {
      start_pos: this.props.start_pos,
      history: [{
        squares: Array(9).fill("")
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }
  handleClick(i: number) {
    // 「時間の巻き戻し」をした時点で新しい着手を起こした場合に、もはや正しくなくなった履歴を確実に捨て去る
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares: Array<string> = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) return
    squares[i] = this.state.xIsNext ? 'X' : '0'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      // 新しい着手が発生した場合、stepNumber を更新する
      stepNumber: history.length
    })
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        "Go to move #" + move :
        "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');
    }
    return (
      <div className="game">
        <div className="game-stand">
          <Stand
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: Array<string>): string {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return "";
}

export { Game };