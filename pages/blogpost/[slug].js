import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

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

export async function getServerSideProps(context) {
  // console.log(context.query);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const { slug } = context.query;
  const url = `http://localhost:3000/api/getblog?slug=${slug}`;
  const data = await fetch(url);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}

export default slug;
