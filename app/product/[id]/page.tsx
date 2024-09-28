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

// import { FetchProduct } from "@/redux/productSlice";
import Image from "next/image";
import { useFetchProductByIDQuery } from "@/redux/productSlice";

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


  const { data } = useFetchProductByIDQuery(id)


  // const [product, setProduct] = React.useState<Product | null>(null);

  // React.useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data));
  // }, []);

  const product= data

  console.log("product ", product);


  let oe = [];
  const cart = useAppSelector((state) => state.Cart.cart);
  for (let i = 1; i <= cart.length; i++) {
    // console.log(" ID ==== >>  ", cart[i].Title.id);

    if (cart[i] && cart[i].Title) {
      oe.push(cart[i].Title.id);
    }
  }

  // console.log("Prod === ", product);

  return (
    <>
      {product && (
        <div className=" flex-col my-5 w-3/4 mx-auto gap-3 sm:flex sm:flex-row">
          <div className="h-[50vh] w-1/2 border-2 rounded justify-center py-10 hidden sm:flex">
            {" "}
            <img src={product.image} className="h-[50vh] w-1/2  " />
          </div>

          <div className="w-full sm:w-1/2 sm:h-[35rem] flex flex-col items-center justify-around border-2 rounded">
            <img src={product.image} className="h-32 w-1/2  " />
            <h5 className="text-center mx-5">{product?.title}</h5>
            <p className="text-center mx-5">{product?.description}</p>
            <p>$ {product.price}</p>

            <div>
              {oe.includes(product.id) ? (
                <div className="flex gap-5">
                  <Button
                    size="small"
                    value={product.id}
                    onClick={(e: any) => {
                      dispatch(removeCart(e.target.value));
                      // console.log(e.target.value)
                    }}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Decrease
                  </Button>

                  <Button
                    size="small"
                    value={product.id}
                    onClick={(e: any) => {
                      dispatch(increaseCart(e.target.value));
                      // console.log(e.target.value)
                    }}
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Increase
                  </Button>
                </div>
              ) : (
                <Button
                  size="small"
                  value={product.id}
                  onClick={(e: any) => {
                    dispatch(AddCart(e.target.value));
                    // console.log(e.target.value)
                  }}
                  style={{ backgroundColor: "blueviolet", color: "white" }}
                >
                  Add To Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
