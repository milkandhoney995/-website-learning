export default function promiseSample() {
  const url = "https://api.github.com/users/milkandhoney995"

  type Profile = {
    login: string
    id: number
  }
  type FetchProfile = () => Promise<Profile | null>

  // 非同期処理を行い、最終的にProfileかnullを返す
  const fetchProfile: FetchProfile = () => {
    // 最終的にPromiseを返す
    return new Promise((resolve, reject) => {
      return fetch(url)
      .then((res) => {
        res.json()
          .then((json) => {
            console.log("Asynchronous Promise sample 1:", json)

            // return せずに、resolveしてjsonを返す
            resolve(json)
          })
          .catch((error) => {
            console.error(error)
            reject(null)
          })
      })
      .catch((error) => {
        console.error(error)
        reject(null)
      })
    })
  }

  fetchProfile()
  .then((profile: Profile | null) => { 
    if (profile) {
      console.log("Asynchronous Promise sample 2:", profile)
    }
  })// Promiseを返すので、then(), catch()が使える
  .catch(() => {

  })
}