import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// step 1: Find the file corresponding to the slug
// step 2: Populate them inside the page.

const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          aspernatur fugit iure dolores? Optio obcaecati ratione ipsa libero
          voluptatem eaque qui necessitatibus nemo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque corporis ad ut dicta minus fugit
          dolorem incidunt labore placeat exercitationem iusto facilis, sapiente
          a error odio doloremque vero dignissimos illum? Vero aspernatur odit
          temporibus eaque eius aliquid, beatae consequuntur, a, officia sit aut
          ducimus in.
        </p>
      </main>
    </div>
  );
};

export default slug;
