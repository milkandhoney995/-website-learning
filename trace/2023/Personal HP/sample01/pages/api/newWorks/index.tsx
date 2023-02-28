// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type workList = {
  text: string,
  href: string
}
type release = {
  title: string,
  workList: workList[],
}
type objectList = {
  pageTitle: string,
  playing: release,
  planning: release
}
type Data = {
  newWorks: objectList
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result: Data = {
    newWorks: {
      pageTitle: 'NEW WORKS',
      playing: {
        title: "放映中の作品",
        workList: [
          {
            text: "「パンドラとアクビ」役：ルイーズ　4/5〜ロードショー",
            href: 'https://dora-bi.com'
          },
        ]
      },
      planning: {
        title: "放映予定の作品",
        workList: [
          {
            text: "「NCIS：ニューオーリンズ」役：タミー・グレゴリオ　スーパー！ドラマTV 毎週木曜22時 他",
            href: 'https://www.superdramatv.com/lineup/SN0000000862.html'
          },
          {
            text: "「HERO MASK」役：サラ・シンクレア",
            href: 'http://heromask.jp/character.html'
          },
        ],
      }
    }
  }
  res.status(200).json(result)
}
