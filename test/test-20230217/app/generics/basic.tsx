export default function genericsBasicSample() {
  // 型の種類は異なるが、同じデータ構造を持っているので共通化したい
const stringReduce = (array: string[], initialValue: string): string => {
  let result = initialValue
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result
}
const numberReduce = (array: number[], initialValue: number): number => {
  let result = initialValue
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result
}

// return `Genetics basic sample 1: ${stringReduce(["May", "the", "force", "be", "with", "you"], "")}`
// return `Genetics basic sample 2: ${numberReduce([100, 200, 300], 1000)}`

// ジェネチック型パラメーター
// 型をパラメーター化し、後から実パラメーターを渡す
// T, U, V, Wなどがよく使われる
type GenericReduce<T> = {
  (array: T[], initialValue: T): T
}

// 具体的な型をバインド
const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
  let result = initialValue
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result
}

// return `Genetics basic sample 3: ${genericStringReduce(["Love", "the", "world", "with", "you"], "")}`
const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
  let result = initialValue
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result
}

return `Genetics basic sample 4: ${genericNumberReduce([1000, 300, 400], 200)}`

// 色々なジェネリック型定義
// 完全なジャネリック型の定義（ここのシグネチャにジェネリック型を割り当てる）
type GenericReduce2 = {
  <T>(array: T[], initialValue: T): T
  <U>(array: U[], initialValue: U): U
}

// 省略記法：シグネチャ全体にジェネリック型を割り当てる
type GenericReduce3<T> = (array: T[], initialValue: T) => T
// 省略記法：ここのシグネチャにジェネリック型を割り当てる
type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}