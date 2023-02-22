export default function typeAliasSample () {
  // 型エイリアス
  type Country = {
    capital: string,
    language: string,
    name: string
  }
  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan'
  }
  // console.log("Object alias sample 1:", japan)

  // 再利用
  const usa: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America'
  }
  // console.log("Object alias sample 2:", usa)

  // 合併型か交差型
  type Knight = {
    hp: number,
    sp: number,
    weapon: string,
    swordSkill: string
  }

  type Wizard = {
    hp: number,
    mp: number,
    weapon: string,
    magicSkill: string
  }

  // 合併型
  type Adventure = Knight | Wizard

  // 交差型
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り'
  }

  // Wizard寄りの冒険者
  const adventure2: Adventure = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール'
  }
  console.log("Object alias sample 3:", adventure1)
  console.log("Object alias sample 3:", adventure2)

  const paladin: Paladin = {
    hp: 30,
    sp: 30,
    mp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイヤボール'
  }

  console.log("Object alias sample 3:", paladin)

}