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

import Card from "./card";

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
    // const data = useAppSelector((state) => state.Product.data);
    // const issues = useAppSelector((state) => state.Product.issues);
  }, [dispatch]);

  // dispatch(FetchProduct());

  const data = useAppSelector((state) => state.Product.data);

  const issues = useAppSelector((state) => state.Product.issues);

  console.log("Data ====>", data);

  //   const cart = useAppSelector((state) => state.Cart.cart);

  type Product = {
    id: any;
    title: any;
    price: any;
    image:any
  };

  interface ProdProp {
    product: Product[];
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "5rem",
        marginBlock: "2rem",
        marginInline: "2rem",
      }}
    >
      <List />

      {Object.values(data).length > 1 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* {Array.from(Array(6)).map((_, index) => ( */}
            {/* <Grid item xs={2} sm={4} md={4} key={index}> */}
            {/* <Item>xs=2</Item> */}

            {(() => {
              if (Object.values(issues).length > 0) {
                return Object.values(issues).map((ProductItem:any) => (
                  <Grid item xs={2} sm={4} md={4} key={ProductItem.id} >
                    <Card key={ProductItem.id} ProductItem={ProductItem} />

                    {/* <Card
                              sx={{ maxWidth: 345 }}
                              key={ProductItem.id}
                              style={{ borderRadius: "15px" }}
                            >
                              <CardMedia
                                component="img"
                                alt="green iguana"
                                // height="5"
                                image={ProductItem.image}
                                style={{ height: "20rem" }}
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                  textAlign={"center"}
                                >
                                  {ProductItem.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  justifyContent={"center"}
                                  alignContent={"center"}
                                >
                                  $ {ProductItem.price}
                                </Typography>
                              </CardContent>
                              <CardActions
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                              </CardActions>
                            </Card> */}
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
