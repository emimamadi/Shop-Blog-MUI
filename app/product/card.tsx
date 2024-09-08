import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { useAppSelector, useAppDispatch } from "@/redux/store";

// import { FetchProduct, searchProduct } from "@/redux/productSlice";

type Product = {
  id: any;
  title: any;
  price: any;
  image: any;
};

type ProdProp = {
  product: Product[];
};

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { AddCart, removeCart, increaseCart } from "@/redux/cartSlice";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function card({
  ProductItem,
  className,
}: {
  ProductItem: Product;
  className: string;
}) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const truncateString = (str: any) =>
    str.length > 23 ? str.slice(0, 23) : str;

  let oe = [];

  let mg = localStorage.getItem("cart") || "0";

  console.log(" mg ====>  ", mg);

  const cart = useAppSelector((state) => state.Cart.cart);

  console.log("Cart in card === > ", cart);

  for (let i = 1; i <= cart.length; i++) {
    console.log(" ID ==== >>  ", cart[i]?.Title.id);

    oe.push(cart[i]?.Title.id);
  }

  console.log("oe === > ", oe);

  return (
    <Card
      sx={{ maxWidth: 345 }}
      key={ProductItem.id}
      style={{ borderRadius: "15px" }}
    >
      <Link href={`/product/${ProductItem.id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          // height="5"
          image={ProductItem.image}
          style={{ height: "20rem" }}

          // onClick={() => {
          //   router.push(`/product/${ProductItem.id}`);
          // }}
        />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {truncateString(ProductItem.title)}
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

        {oe.includes(ProductItem.id) ? (
          <div className="flex gap-1">
            <Button
              size="small"
              value={ProductItem.id}
              onClick={(e: any) => {
                dispatch(removeCart(e.target.value));
                // console.log(e.target.value)
              }}
             style={{backgroundColor:"red", color:"white"}}
            >
              Decrease
            </Button>

            <Button
              size="small"
              value={ProductItem.id}
              onClick={(e: any) => {
                dispatch(increaseCart(e.target.value));
                // console.log(e.target.value)
              }}
              style={{backgroundColor:"green", color:"white"}}
            >
              Increase
            </Button>
          </div>
        ) : (
          <Button
            size="small"
            value={ProductItem.id}
            onClick={(e: any) => {
              dispatch(AddCart(e.target.value));
              // console.log(e.target.value)
            }}

            style={{backgroundColor:"blueviolet", color:"white"}}
           

            
          >
            Add To Cart
          </Button>
        )}
        <Link href={`/product/${ProductItem.id}`}>
          <Button
            size="small"
            onClick={() => {
              router.push(`/product/${ProductItem.id}`);
            }}
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
