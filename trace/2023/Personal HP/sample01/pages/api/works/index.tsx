// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// オブジェクトの型指定

interface WorkInfo {
  text: string
}

type Data = {
  pageTitle: string,
  foreignTitle: string,
  movieTitle: string,
  foreignWorks: Array<WorkInfo>
  movies: Array<WorkInfo>
  actors: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result: Data = {
      pageTitle: 'Works',
      foreignTitle: "吹き替え（海外ドラマ）",
      foreignWorks: [
          {
            text: "「NCIS：ニューオーリンズ シーズン3〜」役：タミー・グレゴリオ（ヴァネッサ・フェルリト）",
          },
          {
            text: "「ブラックリスト 1〜6」役：エリザベス・キーン（メーガン・ブーン）"
          },
          {
            text: "レヴェリー　仮想世界の交渉人」主役：マラ（サラ・シャヒ）"
          },
          {
            text: "「アンフォゲッタブル〜完全記憶捜査〜」主役：キャリー・ウェルズ（ポピー・モンゴメリー）"
          },
        ],
      movieTitle: "吹き替え（映画）",
      actors: ["アン・ハサウェイ", "ガル・ガドット", "ブレイク・ライブリー", "レイチェル・ワイズ"],
      movies: [
        {
          text: "「NCIS：ニューオーリンズ シーズン3〜」役：タミー・グレゴリオ（ヴァネッサ・フェルリト）",
        },
        {
          text: "「HERO MASK」役：サラ・シンクレア",
        },
      ],
  }
  res.status(200).json(result)
}