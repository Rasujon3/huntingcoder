import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  // stpe 1: Collect all the files from blogdata directory
  // stpe 2: Iterate through them and Display them.
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-js"}>
            <h3>How t learn Javascript in 2022?</h3>
          </Link>
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
      </main>
    </div>
  );
};

export default Blog;
