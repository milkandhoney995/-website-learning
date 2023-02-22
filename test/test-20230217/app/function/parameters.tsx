// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in!, Hi, User', username)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in.')
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username: string = "NO NAME"): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in!, Hi, User', username)
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in.', username)
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const sumProductPrice = (...productPrice: number[]): number => {
  return productPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
 }

