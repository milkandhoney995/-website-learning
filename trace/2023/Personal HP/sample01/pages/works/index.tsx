import Image from "next/image";
import { Fragment, useState, useEffect } from "react";
import { Title, SubTitle, WorkList } from '../../components/index'


interface WorkInfo {
  text: string
}
interface Works {
  pageTitle: string,
  foreignTitle: string,
  movieTitle: string,
  foreignWorks: Array<WorkInfo>
  movies: Array<WorkInfo>
  actors: string[]
}

export default function Works() {
  const [works, setWorks] = useState<Works>({
    pageTitle: "",
    foreignTitle: "",
    movieTitle: "",
    foreignWorks: [
      {
        text: "",
      },
    ],
    actors: [],
    movies: [
      {
        text: "",
      },
    ]

  })
  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch('/api/works')
      const data = await response.json()
      setWorks(data)
      console.log(data)
    }
    fetchWorks()
  }, [])

  const pageTitle: string = works.pageTitle
  const foreignTitle: string = works.foreignTitle
  const foreignWorks = works.foreignWorks
  const movieTitle = works.movieTitle
  const movies = works.movies
  const actors = works.actors
  return(
    <Fragment>
      <div className="works__wrapper">
        <Title title={pageTitle}></Title>
        <SubTitle title={foreignTitle}></SubTitle>
        <WorkList
          lists={foreignWorks}
        />
        <SubTitle title={movieTitle}></SubTitle>
        <h2>{actors[0]}</h2>
        <WorkList
          lists={movies}
        />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
      props: {
          layout: "article",
          title: "works",
          imgUrl: "'/images/back02.jpg'"
      },
  };
}