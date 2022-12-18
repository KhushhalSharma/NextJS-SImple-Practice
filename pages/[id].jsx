import { useRouter } from "next/router";
import React from "react";

const Page = ({ blogs }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1 onClick={() => router.back()}>Go back</h1>
      <h1>Page:{router.query.id}</h1>
      <h1>{blogs.tittle}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  let res = await fetch(`http://localhost:8080/blogs`);
  let data = await res.json();
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log("context:", context);
  const {
    params: { id },
  } = context;
  let res = await fetch(`http://localhost:8080/blogs/${id}`);
  let data = await res.json();
  return {
    props: {
      blogs: data,
    },
  };
}

export default Page;
