import '@/styles/globals.scss'
import 'modern-css-reset/dist/reset.min.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
