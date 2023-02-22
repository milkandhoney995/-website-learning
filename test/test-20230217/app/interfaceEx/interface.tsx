interface Bread {
  calories: number
}
interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 350,
  type: 'hard'
}

// 型エイリアスで表現
type MaboDofu = {
  calories: number,
  spicyLevel: number
}

type Rice = {
  calories: number,
  gram: number
}

// 交差型(Union)
type MaboDon = MaboDofu & Rice

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350
}

// interfaceの継承
interface Book {
  page: number,
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  cycle: 'weekly',
  page: 300,
  title: '週刊少年ジャンプ'
}

type BookType = {
  page: number,
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことリップ',
  theme: '旅行'
}

// implementsでclassに型を定義
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page // 初期化で受け取ったpageを、このクラスのpageに代入する
    this.title = title // 初期化で受け取ったtitleを、このクラスのtitleに代入する
  }

  getPublishYear() {
    return this.title + "が発売されたのは" + this.publishYear + "年です。"
  }
}

const popularComic = new Comic(200, 'Demon Slayer', '2016')