import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{`
        h2 {
          font-size: 38px;
        }
        h3 {
          font-size: 28px;
        }
      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keyword"
          content="nextjs, huntingcoder blog, hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script strategy="lazyOnload"></Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li>Blogs</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="">Hunting Coder</span>
        </h1>
        <div className={styles.imagewrap}>
          <Image
            className={styles.myImg}
            src="/homeimg.jpg"
            alt="home"
            // layout="fill"
            width={237}
            height={158}
          />
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How t learn Javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How t learn Javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How t learn Javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
