import React from 'react';
import { Piece } from './Pieces'

type Player = 'first' | 'second'


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
  )
}

interface BoardPropsInterface {
  pieces: Piece[][]
  onClick: (i: number) => void
}
interface BoardStateInterface {
  pieces: Piece[][]
  xIsNext: boolean
}
class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.pieces[Math.floor(i/9)][i%9].showName()}
        onClick={() => this.props.onClick(i)} />
    )
  }
  Content(i: number) {
    let content = []
    for (let j = i; j < i + 3; j++) {
      content.push(this.renderSquare(j))
    }
    return content
  }

  render() {
    let items = []
    for (let i = 0; i < 81; i += 9) {
      let content = []
      for (let j = i; j < i + 9; j++) {
        content.push(this.renderSquare(j))
      }
      items.push(<div className="board-row" key={i}>{content}</div>)
    }
    return (
      <div >
        {items}
      </div>
    )
  }
}

// 獲得したコマを置くスペース
interface StandPropsInterface {
  squares: Array<string>
  onClick: (i: number) => void
}
interface StandStateInterface {
  squares: Array<string>
  xIsNext: boolean
}
class Stand extends React.Component<StandPropsInterface, StandStateInterface> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/>
    )
  }

  render () {
    return (
      <div>
        {
          Array(9).fill(0).map((_, i) => {
            return (
              this.renderSquare(i)
            )
          })
        }
      </div>
    )
  }
}

class Selection {
  
}

export { Board, Selection, Stand };