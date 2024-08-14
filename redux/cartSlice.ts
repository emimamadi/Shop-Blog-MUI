import {
  createSlice,
  createAction,
  configureStore,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { useAppSelector } from "./store";

import _ from "lodash";

// import { useAppDispatch, useAppSelector } from "./store";

// import { FetchProduct, searchProduct } from "@/redux/productSlice";

// const dispatch = useAppDispatch();

// dispatch(FetchProduct());

//   import { products } from "@/data/data";

// const data = useAppSelector((state) => state.Product?.data);

export const SrcData = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("product/FetchProduct", async (_, thunkAPI) => {
  const response = await fetch("https://fakestoreapi.com/products?limit=15", {
    method: "GET",
  });

  const data = response.json();

  return data;
});

// console.log("CART Redux  DATA == > ", data )

interface IssuesState {
  data: string[];
}
const initialState: IssuesState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    akbar: [""],
    loading: false,
    error: null,
    //   issues:{},
    //   cart:[{}]
    cart:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") || "[{}]").map(
            (item: any) => item
          )
        : [{ id: 0, qty: 0, price: 0 }],
  },
  reducers: {
    AddCart: (state, action: PayloadAction<number>) => {
      console.log(
        "state.akbar = ",
        state.akbar.map((x: any) => x.title)
      );

      console.log("action . payload = ", action.payload);

      console.log(
        "State . cart =  ",
        state.cart.map((n: any) => n)
      );

      const x = state.akbar.find((item: any) => item.id == action.payload);

      //   state.cart.push({
      //     id: x?.id,
      //     title: x?.title,
      //     price: x?.price,
      //     category: x?.category,
      //     brand: x?.brand,
      //     qty: 1,
      //   });

      state.cart.push({
        Title: x,
        qty: 1,
      });

      console.log(
        "STATE.CART = ",
        Array.from(state.cart).map((s) => s)
      );

      console.log(
        "STATE.CART 200= ",
        JSON.parse(JSON.stringify(state.cart)).map((x: any) => x)
      );

      let j = state.cart;

      console.log("J =============== ", j);

      localStorage.setItem("cart", JSON.stringify(j)); //11111111111111111111111111111111111111

      console.log("local Storage. cart ", localStorage.getItem("cart"));

      // let mg =localStorage.getItem("cart") || ""

      // const ue= JSON.parse(mg)

      // console.log("Title  ===== >> ",ue[1].Title)
    },

    increaseCart: (state, action: PayloadAction<number>) => {
      console.log("action.payload 0 = ", action.payload);

      console.log("Count ===> ", Object.values(state.cart).length);

      console.log("state cart ==> ", state.cart);

      let ge = Object.values(state.cart).flatMap((h: any) => h);

      let po = Object.values(ge)[2];

      console.log("Inside po ==  >  ", po);

      console.log(
        "JSON state cart ==  >  > ",
        JSON.parse(JSON.stringify(state.cart))[1].Title
      );

      // JSON.parse(JSON.stringify(state.cart))[1].qty=Number(JSON.parse(JSON.stringify(state.cart))[1].qty)+1
      console.log(
        "JSON state cart  QTY ==  >  > ",
        JSON.parse(JSON.stringify(state.cart))[1].qty
      );

      // let yu=structuredClone(state.cart)

      let qw = _.cloneDeep(state.cart);

      // qw[1]["qty"]

      // console.log(
      //   "JSON state cart  QTY  struct clone  ==  >  > ",
      //   qw[1].qty
      // );

      // for (let mo = 1; mo < Object.values(state.cart).length; mo++) {
      //   JSON.parse(JSON.stringify(state.cart))[mo].Title.id == action.payload
      //     ? JSON.parse(JSON.stringify(state.cart))[mo].qty+1
      //     : 0;
      //   //     : 0;
      //   console.log(
      //     "GOlaab ===> ",
      //     JSON.parse(JSON.stringify(state.cart))[mo].Title,
      //     JSON.parse(JSON.stringify(state.cart))[mo].qty
      //     // Object.values(cart)[mo]["qty"]
      //   );
      // }

      // console.log("n === > ", ge)

      // console.log(
      //   "State.cart ===>",
      //   Object.values(state.cart).flatMap((mk: any) => mk.item)
      // );

      // // const golab=Object.values(state.cart).flatMap((mk:any)=>mk.item)

      // const item = Object.values(state.cart).flatMap((mk: any) => mk);

      // console.log(
      //   "QTY ===> ",
      //   Object.values(state.cart).flatMap((mk: any) => mk)
      // );

      // for (let mo = 1; mo < Object.values(item).length; mo++) {
      //   console.log(
      //     "golab ===> ",
      //     Object.values(item)[mo]["title"],
      //     Object.values(item)[mo]["id"]
      //     // Object.values(cart)[mo]["qty"]
      //   );
      // }

      // for (let mo = 1; mo < Object.values(item).length; mo++) {
      //   Object.values(item)[mo]["id"] == action.payload
      //     ? Object.values(item)[mo]["qty"]++
      //     : 0;

      //   console.log("STATE-CART ===>  ", state.cart);

      //   console.log("QTY + ID ==> ", Object.values(item)[mo]["qty"]);
      // }

      for (let mo = 1; mo < qw.length; mo++) {
        qw[mo]["Title"]["id"] == action.payload
          ? (qw[mo]["qty"] = qw[mo]["qty"] + 1)
          : 0;

        console.log("STATE-CART ===>  ", state.cart);

        console.log("QTY + ID ==> ", qw[mo]["Title"]["qty"]);
      }

      // // state.cart=iop

      state.cart = qw;

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART ====> ", localStorage.getItem("cart"));
    },

    removeCart: (state, action: PayloadAction<number>) => {
      console.log(action.payload);

      var qw = _.cloneDeep(state.cart);

      console.log("qw = > CLONE  ", qw)

      for (let mo = 1; mo < qw.length; mo++) {
        if (qw[mo]["Title"]["id"] == action.payload && qw[mo]["qty"] > 0) {
          qw[mo]["qty"]--;
        }
       if (qw[mo]["qty"] == 0) {

          console.log("QW 11211 == > " , qw)

          
          qw = qw.filter(
            (qw: any) => qw.Title?.id != action.payload
          );

          console.log("QW 22222 == > " , qw)
        }

        console.log("STATE-CART ===>  ", state.cart);
      }

      state.cart = qw;

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART ====> ", localStorage.getItem("cart"));
    },

    QTYcart: (state, action: PayloadAction<{ id: number; value: number }>) => {
      console.log("PAYLOAD . ID ===>", action.payload.id);
      console.log("PAYLOAD . VALUE ===>", action.payload.value);

      const item = Object.values(state.cart).flatMap((mk: any) => mk);

      for (let mo = 1; mo < Object.values(item).length; mo++) {
        if (Object.values(item)[mo]["id"] == action.payload.id) {
          var QTY = [];
          if (Number(action.payload.value) > 0) {
            Object.values(item)[mo]["qty"] = Number(action.payload.value);
            QTY.push(Object.values(item)[mo]["qty"]);
          }
          if (Number(action.payload.value) == 0) {
            state.cart = [...state.cart].filter(
              (item: any) => item.id != Number(action.payload.id)
            );
          }
        }

        console.log("STATE-CART CHECKOUT ===>  ", state.cart);
      }

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART CHECKOUT ====> ", localStorage.getItem("cart"));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SrcData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      SrcData.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;

        state.akbar = Object.values(action.payload);

        // state.data.unshift()
        //  state.data = JSON.parse(action.payload)
      }
    );
  },
});

export const { AddCart, removeCart, increaseCart, QTYcart } = cartSlice.actions;

export default cartSlice.reducer;
