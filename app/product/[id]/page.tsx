"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { AddCart, removeCart, increaseCart } from "@/redux/cartSlice";
import { FetchProduct } from "@/redux/productSlice";
import Image from "next/image";

type Product = {
  id: any;
  title: any;
  price: any;
  image: any;
  description: any;
};

export default function page({ params }: { params: { id: number } }) {
  const dispatch = useAppDispatch();

  const { id } = params;

  React.useEffect(() => {
    dispatch(FetchProduct());
    // const data = useAppSelector((state) => state.Product.data);
    // const issues = useAppSelector((state) => state.Product.issues);
  }, [dispatch]);

  const data = useAppSelector((state) => state.Product?.data);

  //   for (let m = 1; m <= Array.from(data).length; m++) {
  //     var ProductItem = Array.from(data)[m].find((x: any) => x.id == id);
  //   }

  const ProductItem = Array.from(data).find((x: any) => x.id == id);

  console.log("DDDD DATA   ==> ", data);

  console.log("DDDD Product  ==> ", ProductItem);

  //   console.log("DDDD Single Product  ==> ", ProductItem);

  let oe = [];
  const cart = useAppSelector((state) => state.Cart.cart);
  for (let i = 1; i <= cart.length; i++) {
    console.log(" ID ==== >>  ", cart[i]?.Title.id);

    oe.push(cart[i]?.Title.id);
  }

  return (
    <div className=" flex my-5 w-3/4 mx-auto gap-3">
      <div className="h-[50vh] w-1/2 border-2 rounded flex justify-center py-10">
        {" "}
        <img
          src={(ProductItem as undefined | Product)?.image}
          className="h-[50vh] w-1/2  "
        />
      </div>

      <div className="w-1/2 min-h-screen flex flex-col items-center justify-evenly border-2 rounded">
        <img
          src={(ProductItem as undefined | Product)?.image}
          className="h-40 w-1/2  "
        />
        <h5 className="text-center mx-5">{(ProductItem as undefined | Product)?.title}</h5>
        <p className="text-center mx-5">{(ProductItem as undefined | Product)?.description}</p>
        <p>$ {(ProductItem as undefined | Product)?.price}</p>

        {/* {oe.includes((ProductItem as undefined | Product)?.id) ? (
          <div className="flex gap-3">
            <button
              className="bg-red-700 rounded"
              onClick={(e: any) => {
                dispatch(removeCart(e.target.value));
              }}
            >
              Decrease
            </button>
            <button
              className="bg-green-950 rounded"
              onClick={(e: any) => {
                dispatch(increaseCart(e.target.value));
                console.log(e.target.value);
              }}
            >
              Increase
            </button>
          </div>
        ) : (
          <button
            className="bg-slate-600 rounded text-white"
            onClick={(e: any) => {
              dispatch(AddCart(e.target.value));
              console.log(e.target.value);
            }}
          >
            Add To Cart
          </button>
        )} */}
      </div>
    </div>
  );
}
