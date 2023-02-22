export default function objectSample() {
  const a: object = {
    name: 'Taro',
    age: 20
  }

  // object リテラル記法で型定義
  let country: {
    language: string,
    name: string
  } = {
    language: 'Japanese',
    name: 'Taro'
  }

  console.log("Object sample 1:", country.name)

  country = {
    language: "English",
    name: "USA"
  }

  console.log("Object sample 2:", country.name)

  // オプショナルとreadonly
  const fogefoge: {
    age: number,
    lastName: string,
    readonly firstName: string,
    gender?: string
  } = {
    age: 20,
    lastName: 'Yamada',
    firstName: 'Taro'
  }

  fogefoge.gender = 'male'
  fogefoge.lastName = 'Kamado'

  console.log("Object sample 3:", fogefoge.firstName)

  const capitals: {
    [sountryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul'
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log("Object sample 4:", capitals)
}