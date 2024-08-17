"use client";

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { BlogData } from "@/redux/blogSlice";

import Card from "@/app/blog/BlogCard";

export default function page() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(BlogData());
  }, []);

  const data = useAppSelector((state) => state.Blog?.data);

  const blogPost = data[0];

  console.log("BBBlog == > ", data);

  console.log("Blog Post == > ", blogPost);

  return (
    <div className="my-20 border border-b-2 border-black mx-10 rounded">
      <div className="flex justify-center my-10 ">
        <h1
          className="font-bold border border-b-red-950 w-20  text-center"
          style={{ letterSpacing: "0.5rem" }}
        >
          Blog
        </h1>{" "}
      </div>

      {Object.values(data).length > 1 ? (
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            marginInline: "10rem",
            marginBlock: "5rem",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* {Array.from(Array(6)).map((_, index) => ( */}
            {/* <Grid item xs={2} sm={4} md={4} key={index}> */}
            {/* <Item>xs=2</Item> */}

            {(() => {
              if (blogPost.length > 0) {
                return Array.from(blogPost).map((PostItem: any) => (
                  <Grid item xs={12} sm={12} md={4}>
                    <Card
                      key={PostItem.id}
                      PostItem={PostItem}
                      className="bg-slate-700"
                    />
                  </Grid>
                ));
              } else {
                return (
                  <div
                    className="flex justify-center items-center min-h-screen w-full"
                    style={{ width: "70vw" }}
                  >
                    <p className="w-50 h-20">Not Found...</p>
                  </div>
                );
              }
            })()}
          </Grid>
        </Box>
      ) : (
        <div className="flex justify-center">
          <p className="my-10">Loading.....</p>{" "}
        </div>
      )}
    </div>
  );
}
