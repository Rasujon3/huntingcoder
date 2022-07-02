import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h2>{slug}</h2>
    </div>
  );
};

export default slug;
