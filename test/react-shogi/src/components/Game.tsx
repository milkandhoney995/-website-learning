import React from 'react';
import { Piece, Blank, Osho, Fu, Gin, Kin, Kyosha, Kaku, Hisha, Keima, Position } from './Pieces'
import { Board, Stand } from './BoardInfo';
import { Setting } from '../setting';

interface GamePropsInterface {
  start_pos: Piece[][]
}
interface GameStateInterface {
  pieces: Piece[][]
  history: Array<{ pieces: Piece[][] }>
  xIsNext: boolean
  stepNumber: number
  selected: number | null
  possibleMoves: number[]
}

export function makePieces(sfen="lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1", language='Ja') {
  let pieces: Piece[][] = Array.from({length: 9}, () => Array(9).fill(null));

  if (sfen === "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1") {
    // 1段目 (9th rank for second player, but in array 0 is 1st rank)
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
     // 3段目
    for (let i = 0; i < Setting.LENGTH; i++) {
      pieces[2][i] = new Fu('first', i+1, 3)
    }
    // 4-6段目 blank
    for (let rank = 3; rank <= 5; rank++) {
      for (let i = 0; i < Setting.LENGTH; i++) {
        pieces[rank][i] = new Blank('first', i+1, rank+1)
      }
    }
    // 7段目
    for (let i = 0; i < Setting.LENGTH; i++) {
      pieces[6][i] = new Fu('second', i+1, 7)
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

class Game extends React.Component<GamePropsInterface, GameStateInterface> {
  constructor(props: GamePropsInterface) {
    super(props)
    this.state = {
      pieces: this.props.start_pos,
      history: [{
        pieces: this.props.start_pos
      }],
      xIsNext: true,
      stepNumber: 0,
      selected: null,
      possibleMoves: []
    }
  }

  handleClick(i: number) {
    if (this.state.selected === null) {
      const piece = this.state.pieces[Math.floor(i/9)][i%9]
      if (piece.showName() && ((this.state.xIsNext && piece.getPlayer() === 'first') || (!this.state.xIsNext && piece.getPlayer() === 'second'))) {
        this.setState({selected: i, possibleMoves: this.getPossibleMoves(i)})
      }
    } else {
      if (this.state.possibleMoves.includes(i)) {
        const newPieces = this.state.pieces
        const fromRank = Math.floor(this.state.selected / 9)
        const fromFile = this.state.selected % 9
        const toRank = Math.floor(i / 9)
        const toFile = i % 9
        newPieces[toRank][toFile] = newPieces[fromRank][fromFile]
        newPieces[toRank][toFile].position = new Position(toFile + 1, toRank + 1)
        newPieces[fromRank][fromFile] = new Blank('first', fromFile + 1, fromRank + 1)
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        this.setState({
          pieces: newPieces,
          history: history.concat([{pieces: newPieces}]),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
          selected: null,
          possibleMoves: []
        })
      } else {
        this.setState({selected: null, possibleMoves: []})
      }
    }
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      selected: null,
      possibleMoves: []
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]

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

    let status = 'Next player: ' + (this.state.xIsNext ? '先手' : '後手');
    return (
      <div className="game">
        <div className="game-stand">
          <Stand
            squares={Array(9).fill("")}
            onClick={() => {}}
          />
        </div>
        <div className="game-board">
          <Board
            pieces={current.pieces}
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

  getPossibleMoves(i: number): number[] {
    const piece = this.state.pieces[Math.floor(i/9)][i%9]
    let moves: number[] = []
    for (let r = 0; r < 9; r++) {
      for (let f = 0; f < 9; f++) {
        if (r === Math.floor(i/9) && f === i%9) continue
        const pos = new Position(f + 1, r + 1)
        if (piece.canMoveTo(pos, piece.getPlayer()) && this.state.pieces[r][f].showName() === '') {
          moves.push(r * 9 + f)
        }
      }
    }
    return moves
  }
}

export { Game };