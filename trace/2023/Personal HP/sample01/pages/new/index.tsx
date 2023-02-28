import { Fragment, useState, useEffect } from "react";
import { Title, SubTitle, Works } from '../../components/index'

// type workList = {
//   text: string,
//   href: string
// }
// type release = {
//   title: string,
//   workList: workList[],
// }
// type objectList = {
//   pageTitle: string,
//   playing: release,
//   planning: release
// }
// type Data = {
//   newWorks: objectList
// }
// export default interface WorkerType {
//   pageTitle: string,
//   planning: Object,
//   playing: Object
// }
export default function New() {
  const [works, setWorks] = useState([])
  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch('/api/newWorks')
      const data = await response.json()
      setWorks(data)
    }
    fetchWorks()
  }, [])
  console.log(works.newWorks)
  return(
    <Fragment>
      <div className="works__wrapper">
        <Title title='{works.pageTitle}'></Title>
        {/* <SubTitle title={works.newWorks.planning.title}></SubTitle> */}
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

export async function getStaticProps() {
  return {
      props: {
          layout: "article",
          title: "new",
          imgUrl: "'/images/back01.jpg'"
      },
  };
}