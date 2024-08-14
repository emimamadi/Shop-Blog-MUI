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

import { useRouter } from "next/router";

export default function card({ ProductItem ,className}: { ProductItem: Product,className:string }) {
  // const router = useRouter()

  const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(FetchProduct());

  // }, []);

  // const truncateString= (x: any,num=23) => {
  //   x > num  ? x.substring(0, num) : x;
  // };

  const truncateString = (str: any) =>
    str.length > 23 ? str.slice(0, 23) : str;

  // console.log("Prod Item   == > ", ProductItem);

  let oe = [];

  let mg = localStorage.getItem("cart") || "0";

  console.log(" mg ====>  ", mg);

  const cart = useAppSelector((state) => state.Cart.cart);

  console.log("Cart in card === > ", cart)

  // console.log(" ue ====>  ", JSON.parse(mg)[1]?.Title.id)

  // let ue =Array.from(JSON.parse(mg)) ;

  // console.log("ue ===> > >",ue)


  //+++++++++++++++++++++++



   for (let i = 1; i <= cart.length; i++) {
   console.log(" ID ==== >>  ", cart[i]?.Title.id);

   oe.push(cart[i]?.Title.id);
 }

 console.log("oe === > ", oe);


///++++++++++++++++++++++++++++++++++++++++++

  // let ue = JSON.parse(mg);

  // for (let i = 1; i <= ue.length; i++) {
  //   console.log(" ID ==== >>  ", ue[i]?.Title.id);

  //   oe.push(ue[i]?.Title.id);
  // }

  // console.log("oe === > ", oe);

  // React.useEffect(() => {}, [oe]);

  ///++++++++++++++++++++++++++++++++++++++++++


  // console.log("Title  ===== >> ", ue[1]?.Title.id);

  return (
    <Card
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
          {/* {alo(ProductItem.title)} */}

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
          >
            Add To Cart
          </Button>
        )}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    // <Card sx={{ maxWidth: 345 }}  key={ProductItem.id}>
    //   {/* <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image={ProductItem.image}
    //   /> */}
    //   <CardContent>
    //     <Typography
    //       gutterBottom
    //       variant="h5"
    //       component="div"
    //       textAlign={"center"}
    //     >
    //       {ProductItem.title}
    //     </Typography>
    //     <Typography
    //       variant="body2"
    //       color="text.secondary"
    //       justifyContent={"center"}
    //       alignContent={"center"}
    //     >
    //      $ {ProductItem.price}
    //     </Typography>
    //   </CardContent>
    //   <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
