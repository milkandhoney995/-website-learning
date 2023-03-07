// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// オブジェクトの型指定

interface WorkInfo {
  text: string
  href: string
}

type Data = {
  pageTitle: string,
  playingTitle: string,
  planningTitle: string,
  playingWorks: Array<WorkInfo>
  planningWorks: Array<WorkInfo>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result: Data = {
      pageTitle: 'NEW WORKS',
      playingTitle: "放映中の作品",
      playingWorks: [
          {
            text: "「パンドラとアクビ」役：ルイーズ　4/5〜ロードショー",
            href: 'https://dora-bi.com'
          },
        ],
      planningTitle:  "放映予定の作品",
      planningWorks: [
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
  res.status(200).json(result)
}
