"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";

import { BlogData } from "@/redux/blogSlice";

type Mo = {
  id: any;
  title: any;
  body: any;
};

export default function page({
  params,
}: {
  params: { id: number };
  dl: { dl: Mo };
}) {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.Blog?.data);

  const { id } = params;

  const dl = Array.from(data[0]).find((x: any) => x.id == id) || undefined;

  console.log("DDDD ==> ", dl);

  // const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    dispatch(BlogData());
    // setIsClient(true);
  }, []);

  return (
    <div className="flex ">
      { dl !=undefined || null ? (
        <div className="flex flex-col items-center pt-10 mx-40 gap-5 shadow-slate-700 shadow-lg my-5 border-2 w-4/5 min-h-screen rounded-xl">
          <img src="/favicon.ico" alt="" />
          <h5>{(dl as undefined | Mo)?.title}  </h5>
          <p className="px-20">{(dl as undefined | Mo)?.body}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
