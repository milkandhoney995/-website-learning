export class Setting {
  // 盤の列数（行数）
  public static LENGTH: number = 9
  // 14: 成った時の駒(空を除く)を含めた駒の種類 + 飛、角、金、銀、桂、香、歩の7種類 × 2
  public static UNCLICKED: number = 81 + 14;
  // 7: 飛、角、金、銀、桂、香、歩の7種類（相手から獲った駒の配列などに使う）
  public static WHITE: number = 7;
  // 駒の種類: 8 => 成った時の駒: 空を含め8
  public static MT: number = 16;
  // index+8で駒が成る
  // 飛->竜、角->馬、金(または王)->""、銀->全、桂->圭、香->杏、歩->と
  public static PIECES: string[] = ["飛", "角", "金", "銀", "桂", "香", "歩", "玉", "竜", "馬", "", "全", "圭", "杏", "と", ""]
  public static NUM: string[] = ["", "", "ニ", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八"]
}