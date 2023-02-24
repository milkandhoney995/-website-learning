import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

interface SquarePropsInterface {
  value: string;
  onClick: () => void
}

function Square(props: SquarePropsInterface) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      >
        {props.value}
    </button>
  );
}

interface BoardPropsInterface {
  squares: Array<string>
  onClick: (i: number) => void
}
interface BoardStateInterface {
  squares: Array<string>
  xIsNext: boolean
}

class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/>
    )
  }
  Content(i: number) {
    let content = []
    for (let j = i; j < i+3; j++) {
      content.push(this.renderSquare(j))
    }
    return content
  }

  render() {
    let items = []
    for (let i = 0; i < 9; i=i+3) {
      items.push(<div className="board-row" key={i}>{this.Content(i)}</div>)
    }

    return (
      <div>
        {items}
      </div>
    );
  }
}

interface GamePropsInterface {
  squares: Array<string>
}
interface GameStateInterface {
  history: Array<{ [field: string]: string[]}>
  xIsNext: boolean
  stepNumber: number
}

class Game extends React.Component<GamePropsInterface, GameStateInterface> {
  constructor(props: GamePropsInterface) {
    super(props)
    this.state = {
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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Game squares={Array(9).fill("")} />);

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

