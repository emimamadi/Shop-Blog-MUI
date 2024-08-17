import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { useAppSelector, useAppDispatch } from "@/redux/store";

// import { FetchProduct, searchProduct } from "@/redux/productSlice";

type Post = {
  id: any;
  title: any;
  body: any;
  onClick: () => void;
};

// type ProdProp = {
//   product: Product[];
// };

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { AddCart, removeCart, increaseCart } from "@/redux/cartSlice";

import { useRouter } from "next/navigation";

export default function card({
  PostItem,
  className,
}: {
  PostItem: Post;
  className: string;
}) {
  // const router = useRouter()

  const dispatch = useAppDispatch();

  const router = useRouter();

  // React.useEffect(() => {
  //   dispatch(FetchProduct());

  // }, []);

  // const truncateString= (x: any,num=23) => {
  //   x > num  ? x.substring(0, num) : x;
  // };

  const truncateString = (str: any, num: number) =>
    str.length > num ? str.slice(0, num) : str;

  // console.log("Prod Item   == > ", ProductItem);

  // let oe = [];

  // let mg = localStorage.getItem("cart") || "0";

  // console.log(" mg ====>  ", mg);

  // const cart = useAppSelector((state) => state.Cart.cart);

  // console.log("Cart in card === > ", cart)

  // console.log(" ue ====>  ", JSON.parse(mg)[1]?.Title.id)

  // let ue =Array.from(JSON.parse(mg)) ;

  // console.log("ue ===> > >",ue)

  //+++++++++++++++++++++++

  //    for (let i = 1; i <= cart.length; i++) {
  //    console.log(" ID ==== >>  ", cart[i]?.Title.id);

  //    oe.push(cart[i]?.Title.id);
  //  }

  //  console.log("oe === > ", oe);

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
      key={PostItem.id}
      style={{ borderRadius: "15px" }}
      onClick={() => {
        router.push(`/blog/${PostItem.id}`);
        // router.push({
        //   pathname: "/post/[pid]",
        //   query: { pid: PostItem.id },
        // });
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        // height="5"
        image="favicon.ico"
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

          {truncateString(PostItem.title, 23)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          justifyContent={"center"}
          alignContent={"center"}
        >
          {truncateString(PostItem.body, 90)}...
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
    </Card>
  );
}
