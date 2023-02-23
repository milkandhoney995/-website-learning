export default function callbackSample() {
  // 自分のGitHubのIDを指定すると、プロフィール情報を取得できる
  const url = "https://api.github.com/users/milkandhoney995"
  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => { // 非同期処理の実行が終わったら実行する.then()
        // レスポンスのBodyをJSONで読み取った結果を返す
        res.json()
          .then((json) => {
            console.log("Asynchronous Callback sample 1:", json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchronous Callback sample 2:", profile)
}