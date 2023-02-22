export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  // item(コールバック関数)、返り値はUの配列
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  // 文字列を渡して数値を返す関数
  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringsToNumbers(["123", "456", "789"], (item) => Number(item))
  // return `Generics advanced sample 1: ${numbers}`

  // 数値を渡して文字列を返す関数
  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const strings = mapNumbersToStrings([123, 345, 678], (item) => String(item))
  return `Generics advanced sample 2: ${strings}`

}