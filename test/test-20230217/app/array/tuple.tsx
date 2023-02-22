export default function TupleSample() {
  // 厳格な配列：タプル
  // 配列の要素数と型を定義できる

  // OK
  let response: [number, string] = [200, "OK"]
  // NG
  // response = [400, "Bad Request", "Email parameter is missing"] // Type '[number, string, string]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2.
  // response = ["400", "Bad Request"] // Type 'string' is not assignable to type 'number'

  // 可変長（レストパラメーター）を使ったタプル
  const girlFriends: [string, ...string[]] = ["kana", "Miku", "Keiko"] // ...によって、1つ目の要素以降は、何個でも良い
  girlFriends.push("Misa")
  return `TupleSample: 「${response}」と「${girlFriends}」`
}