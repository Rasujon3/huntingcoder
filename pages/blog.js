import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

// stpe 1: Collect all the files from blogdata directory
// stpe 2: Iterate through them and Display them.
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  // console.log("Useeffect is running");
  // const url = `http://localhost:3000/api/blogs`;
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => setBlogs(data));
  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p>{blogitem.content.substr(0, 140)} ...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const url = `http://localhost:3000/api/blogs`;
  let data = await fetch(url);
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default Blog;
