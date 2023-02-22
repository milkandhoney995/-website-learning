export default function arraySmaple() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue'] // stringの配列
  colors.push('yellow')
  // colors.push(123) // NG

  // numberの型
  const odd: number[] = [1, 3, 5]
  const even: Array<number> = [2, 4, 6]

  // 合併型の配列
  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)

  // 配列の型推論
  const generateSomeArray = () => {
    const someArray = [] //any[]
    someArray.push(123) // number[]
    someArray.push("ABC") // (string | number)[]
    return someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)

  // イミュータブルな配列
  // JSの配列はconstで宣言してもミュータブル（書き換え可）
  const mutableNumbers: number[] = [1, 2, 3]
  mutableNumbers[2] = 4

  const commands: readonly string[] = ["git add", "git commit", "git push"]
  commands.push("git fetch") // Property 'push' does not exist on type 'readonly string[]'.
  commands[2] = "git pull" // Index signature in type 'readonly string[]' only permits reading.

  // readonlyでイミュータブル（書き換え不可）な配列・タプルを作る
  const numbers: ReadonlyArray<number> = [1, 2, 3]
  const names: ReadonlyArray<string> = ["Taro", "Kazu"]

  return `ArraySample: ${odd} ${even} ${ids} ${someArray} ${numbers} ${names} `

}