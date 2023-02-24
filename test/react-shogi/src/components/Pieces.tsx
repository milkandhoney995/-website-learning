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
    if (player === 'first') {
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

abstract class Piece {
  protected position: Position

  constructor(
    private readonly player: Player,
    suji: Suji,
    dan: Dan
  ) {
    this.position = new Position(suji, dan)
  }

}

// 王将
class Osho extends Piece {}
// 飛車
class Hisha extends Piece {}
// 角
class Kaku extends Piece {}
// 金
class Kin extends Piece {}
// 銀
class Gin extends Piece {}
// 桂馬
class Keima extends Piece {}
// 香車
class Kyosha extends Piece {}
// 歩
class Fu extends Piece {}

class Ryu extends Hisha {}
class Uma extends Kaku {}

// 移動先が1マス以内、かつ左後方と右後方には進めないもの
class Narikin extends Fu {}
class Narigin extends Gin {}
class Kei extends Keima {} // 圭
class Narikyo extends Kyosha {} // 成香

export { Piece, Osho, Hisha, Kaku, Kin, Gin, Keima, Kyosha, Fu, Ryu, Uma, Narikin, Narigin, Kei, Narikyo };