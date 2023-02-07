import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function New() {
  return(
    <Fragment>
      <article>
        <div className="backImage backImage__img01">
          <span></span>
        </div>
        <div className="contents">
          <div className="works">
            <h1 className="title">NEW WORKS</h1>
            <h2 className="title--sm">放映予定の作品</h2>
            <div className="works__body">
              <section className="works__section">
                <p className="works__text">
                「パンドラとアクビ」役：ルイーズ
                <br />
                4/5〜ロードショー
                <br />
                <Link
                  className="works__link"
                  href="https://dora-bi.com"
                  target="_blank">
                  https://dora-bi.com
                </Link>
                </p>
              </section>
            </div>
            <h2 className="title--sm">放映中の作品</h2>
            <div className="works__body">
            <section className="works__section">
                <p className="works__text">
                「パンドラとアクビ」役：ルイーズ
                <br />
                4/5〜ロードショー
                <br />
                <Link
                  className="works__link"
                  href="https://dora-bi.com"
                  target="_blank">
                  https://dora-bi.com
                </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  )
}