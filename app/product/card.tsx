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

export default function card({ ProductItem }: { ProductItem: Product }) {
  // const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(FetchProduct());

  // }, []);

  // const truncateString= (x: any,num=23) => {
  //   x > num  ? x.substring(0, num) : x;
  // };


  const truncateString = (str: any) =>
    str.length > 23 ? str.slice(0, 23) : str;



  console.log("Prod Item   == > ", ProductItem);

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
