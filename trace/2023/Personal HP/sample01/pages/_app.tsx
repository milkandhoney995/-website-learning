// Import Swiper styles
import 'swiper/scss';
import "swiper/css/effect-fade";
import '@/styles/globals.scss'
import 'modern-css-reset/dist/reset.min.css'
import type { AppProps } from 'next/app'
import { Layout, ArticleLayout } from "../components/index";

export default function App({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case "home": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
    }
    case "article": {
      return (
        <ArticleLayout imageUrl={pageProps.imgUrl}>
          <Component {...pageProps} />
        </ArticleLayout>
      )
    }
    default: {
      return <Component {...pageProps} />;
    }
  }
}
