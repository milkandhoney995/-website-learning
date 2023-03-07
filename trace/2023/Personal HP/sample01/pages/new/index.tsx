import { Fragment, useState, useEffect } from "react";
import { Title, SubTitle, Works, WorkList } from '../../components/index'

interface WorkInfo {
  text: string
  href: string
}
interface Works {
  pageTitle: string,
  playingTitle: string,
  planningTitle: string,
  playingWorks: Array<WorkInfo>
  planningWorks: Array<WorkInfo>
}
export default function New() {
  const [works, setWorks] = useState<Works>({
    pageTitle: "",
    playingTitle: "",
    planningTitle: "",
    playingWorks: [
      {
        text: "",
        href: ""
      },
    ],
    planningWorks: [
      {
        text: "",
        href: ""
      },
    ]

  })
  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch('/api/newWorks')
      const data = await response.json()
      setWorks(data)
      console.log(data)
    }
    fetchWorks()
  }, [])

  const pageTitle: string = works.pageTitle
  const playingTitle: string = works.playingTitle
  const playingWorks = works.playingWorks
  const planningWorks = works.planningWorks

  return(
    <Fragment>
      <div className="works__wrapper">
        <Title title={pageTitle}></Title>
        <SubTitle title={playingTitle}></SubTitle>
        <WorkList
          lists={playingWorks}
          useComponents={true}
        />
        <SubTitle title={works.planningTitle}></SubTitle>
        <WorkList
          lists={planningWorks}
          useComponents={true}
        />
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