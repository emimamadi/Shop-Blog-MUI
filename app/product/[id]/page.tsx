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

export default function page({
  params,
}: {
  params: { id: number };
  product: { product: Product };
}) {
  const dispatch = useAppDispatch();

  const { id } = params;

  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  console.log("post = ", product);

  let oe = [];
  const cart = useAppSelector((state) => state.Cart.cart);
  for (let i = 1; i <= cart.length; i++) {
    console.log(" ID ==== >>  ", cart[i]?.Title.id);

    oe.push(cart[i]?.Title.id);
  }

  console.log("Prod === ", product);

  return (
    <>
      {product ? (
        <div className=" flex-col my-5 w-3/4 mx-auto gap-3 sm:flex sm:flex-row">
          <div className="h-[50vh] w-1/2 border-2 rounded justify-center py-10 hidden sm:flex">
            {" "}
            <img src={product.image} className="h-[50vh] w-1/2  " />
          </div>

          <div className="w-full sm:w-1/2 min-h-screen flex flex-col items-center justify-evenly border-2 rounded">
            <img src={product?.image} className="h-40 w-1/2  " />
            <h5 className="text-center mx-5">{product?.title}</h5>
            <p className="text-center mx-5">{product?.description}</p>
            <p>$ {product?.price}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
