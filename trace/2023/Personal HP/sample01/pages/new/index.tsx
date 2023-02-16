import { Fragment } from "react";
import { Title, SubTitle, Works } from '../../components/index'

export default function New() {
  return(
    <Fragment>
      <div className="works__wrapper">
        <Title title={'NEW WORKS'}></Title>
        <SubTitle title={'放映予定の作品'}></SubTitle>
        <Works
          text={'「パンドラとアクビ」役：ルイーズ　4/5〜ロードショー'}
          href={'https://dora-bi.com'}
        ></Works>
        <SubTitle title={'放映中の作品'}></SubTitle>
        <Works
          text={'「パンドラとアクビ」役：ルイーズ　4/5〜ロードショー'}
          href={'https://dora-bi.com'}
        ></Works>
      </div>
    </Fragment>
  )
}