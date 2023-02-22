type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 // 横
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' // 縦
type Player = 'first' | 'second'

// 駒の位置
class Position {
  constructor(
    private suji: Suji,
    private dan: Dan
  ) {}

  // パラメーターに渡された位置と、現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player == 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan))
      }
    } else {
      // 段(縦の位置)は、正負反転
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(Number(position.dan) - Number(this.dan)))
      }
    }
  }
}

// 将棋の駒
abstract class Piece {
  protected position: Position

  constructor(
    private readonly player: Player,
    suji: Suji,
    dan: Dan
  ) {
    // this：`Pieceクラスの中のposition
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  // 駒の移動用メソッド
  moveTo(position: Position) {
    this.position = position
  }
  // 移動できるかどうかのメソッド
  // 駒が移動できる範囲は、駒の種類によって違うので、abstract
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  // 具体的な実装
  canMoveTo(position: Position, player: Player): boolean {
    let distance = this.position.distanceFrom(position, player)
    // 1マス以内だったら移動できる
    return distance.suji < 2 && distance.dan < 2
  }
}
class Hisha extends Piece {}
class Kaku extends Piece {}
class Kin extends Piece {}
class Gin extends Piece {}
class Keima extends Piece {}
class Kyosha extends Piece {}
class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
      const distance = this.position.distanceFrom(position, player)
      // 移動先との距離が前方1マスであれば
      return distance.suji == 0 && distance.dan == 1
  }
}
class Narikin extends Fu {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      // 移動先が1マス以内
      distance.suji < 2 && distance.dan <2
      // 左後方と右後方には進めない
      && (distance.suji !== 0 && distance.dan === -1)
    )
  }
}

// 将棋のゲーム
class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9'),
    ]
  }
}
