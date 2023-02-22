export default function notExistSample() {
  let name = null
  console.log("notExist sample 1:", typeof name, name) // objectで判定される
  name = 'yu'
  if (name) {
    console.log("notExist sample 2:", "吾輩は猫である。名前は"+name)
  } else {
    console.log("notExist sample 3:", "吾輩は猫である。名前は"+name)
  }

  let age = undefined
  age = 25
  console.log("notExist sample 4:", typeof age, age) // 型はundefinedで判定される
  if (age) {
    console.log("notExist sample 5:", "年齢は"+age+"さいです")
  } else {
    console.log("notExist sample 6:", "年齢は秘密です"+age)
  }
}