import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// step 1: Find the file corresponding to the slug
// step 2: Populate them inside the page.

const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blog, setBlog] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const { slug } = router.query;
    const url = `http://localhost:3000/api/getblog?slug=${slug}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [router.isReady]);
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

export default slug;
