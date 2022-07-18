import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

// step 1: Find the file corresponding to the slug
// step 2: Populate them inside the page.

const slug = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog?.title}</h1>
        <hr />
        <p>{blog && blog?.content}</p>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // console.log(context.query);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default slug;
