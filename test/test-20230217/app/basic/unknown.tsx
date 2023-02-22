export default function unknownSmaple() {
  let maybeNumber: unknown = 10
  console.log("unknown sample 1:", typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === "foo"
  console.log("unknown sample 2:", typeof isFoo, isFoo)

  // const sum = maybeNumber + 10
  // APIで帰ってくる値の型がわからない時などに、if分と合わせて使う
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log("unknown sample 3:", typeof sum, sum)
  }
}