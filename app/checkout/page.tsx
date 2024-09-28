"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import _ from "lodash";

import { useAppSelector, useAppDispatch } from "@/redux/store";
import { QTYcart } from "@/redux/cartSlice";

export default function page() {
  const [isClient, setIsClient] = React.useState(false);

  const cart = useAppSelector((state) => state.Cart.cart);

  const dispatch = useAppDispatch();

  const cx = [];

  const h = _.cloneDeep(cart);

  for (let k = 1; k <= h.length; k++) {
    if (h[k] && h[k].Title) {
      cx.push({
        ID: h[k].Title.id,
        Title: h[k].Title.title,
        Price: parseFloat((h[k].Title.price*h[k].qty).toString()).toFixed(2) ,
        Category: h[k].Title.category,
        QTY: h[k].qty,
      });
    }
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  console.log("cx ==> ", cx);

  return (
    <>
      {isClient ? (
        <TableContainer
          className="mt-10 mx-auto min-h-screen"
          style={{ width: "90rem" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {/* <StyledTableCell>ID</StyledTableCell> */}
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Price </StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">QTY</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cx.map((row) => (
                <StyledTableRow key={row.ID}>
                  {/* <StyledTableCell component="th" scope="row">
                {row.ID}
              </StyledTableCell> */}
                  <StyledTableCell align="left">{row.Title}</StyledTableCell>
                  <StyledTableCell align="left"> $ {row.Price} </StyledTableCell>
                  <StyledTableCell align="left">{row.Category}</StyledTableCell>
                  <StyledTableCell align="left">
                    <input
                      type="number"
                      id="number-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={row.QTY}
                      required
                      onChange={(e: any) => {
                        dispatch(
                          QTYcart({ id: row.ID, value: e.target.value })
                        );
                      }}
                      min={-1}
                      defaultValue={row.QTY}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "loading..."
      )}
    </>
  );
}
