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

  const truncateString = (str: any, num: number) =>
    str.length > num ? str.slice(0, num) : str;

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
