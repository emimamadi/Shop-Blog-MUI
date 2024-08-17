"use client";
// import React from "react";

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//

// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//

import Card from "@/app/product/card";

import List from "./list";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { FetchProduct, searchProduct } from "@/redux/productSlice";

// import { AddCart, removeCart, increaseCart } from "@/redux/cartSlice";

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
    dispatch(FetchProduct());
  }, [dispatch]);

  const data = useAppSelector((state) => state.Product?.data);

  const issues = useAppSelector((state) => state.Product?.issues);

  console.log("Data ====>", data);

  type Product = {
    id: any;
    title: any;
    price: any;
    image: any;
  };

  interface ProdProp {
    product: Product[];
  }

  return (
    <div
      className="bg-lime-400 flex flex-col lg:flex-row gap-10 my-5 mx-5  sm:bg-yellow-500 md:bg-blue-600 lg:bg-slate-500   xl:bg-teal-600 
      
      p-5 rounded"
    >
      <List className="bg-yellow-500" />

      {Object.values(data).length > 1 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {(() => {
              if (Object.values(issues).length > 0) {
                return Object.values(issues).map((ProductItem: any) => (
                  <Grid item xs={12} sm={6} md={4} key={ProductItem.id}>
                    <Card
                      key={ProductItem.id}
                      ProductItem={ProductItem}
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
        <div className="">Loading..... </div>
      )}
    </div>
  );
}
