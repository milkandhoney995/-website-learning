type Player = 'first' | 'second'


export function isFirst(player: Player): boolean {
  return player === 'first'
}
// 駒の位置
class Position {
  constructor(
    private suji: number, // 横
    private dan: number, // 縦
  ) {}

  // パラメーターに渡された位置と、現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (isFirst(player)) {
      return {
        suji: Math.abs(position.suji - this.suji), // ab(): 絶対値を返す
        dan: Math.abs(position.dan - this.dan)
      }
    } else {
      // 段(縦の位置)は、正負反転
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(position.dan - this.dan))
      }
    }
  }
}

abstract class Piece {
  public position: Position
  // 駒の名前
  private name: string;


  constructor(
    private readonly player: Player,
    suji: number,
    dan: number,
    name: string
  ) {
    this.position = new Position(suji, dan)
    this.name = name as string
  }

  public showName(): string {
    return this.name
  }
  public getPlayer(): Player {
    return this.player
  }
  public showPosition(): Position{
    return this.position
  }
  abstract canMoveTo(position: Position, player: Player): boolean
  public isPromoted(player: Player, dan: number): boolean {
    return (isFirst(player) && dan <= 3) || (!isFirst(player) && dan >= 7)
  }

}

class Blank extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
  ) {
    super(player, suji, dan, '')
  }
  canMoveTo(position: Position, player: Player): boolean {
    return false
  }
}

// 王将
class Osho extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '玉')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // 1マス以内
    return distance.suji < 2 && distance.dan < 2
  }
}
// 飛車
class Hisha extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    name: string='飛' // 龍のために必要
    ) {
    super(player, suji, dan, name)
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // 前後に何処までも、横にも何処までも動ける
    return (distance.suji <= 8 && distance.dan === 0) || (distance.suji === 0 && distance.dan <= 8)
  }
}
// 角
class Kaku extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    name: string='角' // 馬のために必要
    ) {
    super(player, suji, dan, name)
  }
  canMoveTo(position: Position, player: Player): boolean {
      const distance = this.position.distanceFrom(position, player)
      return distance.suji === distance.dan
  }
}
// 金
class Kin extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '金')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      // 移動先が1マス以内
      distance.suji < 2 && distance.dan < 2
      // 左後方と右後方には進めない
    ) && (distance.suji !== 0 && distance.dan !== -1)
  }
}
// 銀
class Gin extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '銀')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      // 斜め1マス×4つ
      distance.suji === 1 && distance.dan === 1
      // 前方1マス
    ) || (distance.suji === 0 && distance.dan === 1)
  }
}
// 桂馬
class Keima extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '桂')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji === 1 && distance.dan === 2
  }
}
// 香車
class Kyosha extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '香')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji === 0 && distance.dan <= 8
  }
}
// 歩
class Fu extends Piece {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '歩')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // 移動先との距離が前方1マス
    return distance.suji === 0 && distance.dan === 1
  }
}

class Ryu extends Hisha {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '龍')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // 前後に何処までも、横にも何処までも動ける
    // +1マス以内
    return (distance.suji <= 8 && distance.dan === 0) || (distance.suji === 0 && distance.dan <= 8) || (distance.suji < 2 && distance.dan < 2)
  }
}
class Uma extends Kaku {
  constructor(
    player: Player,
    suji: number,
    dan: number,
    ) {
    super(player, suji, dan, '馬')
  }
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // +1マス以内
    return (distance.suji === distance.dan) || (distance.suji < 2 && distance.dan < 2)
  }
}

// 移動先が1マス以内、かつ左後方と右後方には進めないもの
// class SmallPromotedPiece extends Piece {
//   canMoveTo(position: Position, player: Player): boolean {
//     const distance = this.position.distanceFrom(position, player)
//     return (
//       distance.suji < 2 && distance.dan < 2
//     ) && (distance.suji !== 0 && distance.dan !== -1)
//   }

// }
class Narikin extends Fu {}
class Narigin extends Gin {}
class Kei extends Keima {} // 圭
class Narikyo extends Kyosha {} // 成香

export { Piece, Blank, Osho, Hisha, Kaku, Kin, Gin, Keima, Kyosha, Fu, Ryu, Uma, Narikin, Narigin, Kei, Narikyo, Position };