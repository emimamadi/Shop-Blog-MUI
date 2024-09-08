"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";

import { BlogData } from "@/redux/blogSlice";

type Post = {
  id: any;
  title: any;
  body: any;
};

export default function page({
  params,
}: {
  params: { id: number };
  dl: { dl: Post };
}) {
  const { id } = params;

  // const dispatch = useAppDispatch();

  // const data = useAppSelector((state) => state.Blog?.data);

  // const dl = Array.from(data[0]).find((x: any) => x.id == id) || undefined;

  // console.log("DDDD ==> ", dl);

  // const [isClient, setIsClient] = React.useState(false);

  const [post, setPost] = React.useState<Post | null>(null);

  React.useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  console.log("post = ", post);

  return (
    <div className="flex ">
      {post ? (
        <div className="flex flex-col items-center pt-10 mx-40 gap-5 shadow-slate-700 shadow-lg my-5 border-2 w-4/5 min-h-screen rounded-xl">
          <img src="/favicon.ico" alt="" />
          <h5>{post?.title} </h5>
          <p className="px-20">{post?.body}</p>
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
