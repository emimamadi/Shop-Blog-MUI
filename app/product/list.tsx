import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import ListItem from "@mui/material/ListItem";

import Divider from "@mui/material/Divider";

import CategoryIcon from "@mui/icons-material/Category";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import Typography from "@mui/material/Typography";

import ReactSlider from "react-slider";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import GradeIcon from '@mui/icons-material/Grade';

import {
  searchProduct,
  priceProduct,
  categoryProduct,
  rateProduct,
} from "@/redux/productSlice";

import "./style.scss";

const MIN = 0;

const MAX = 1000;

const minRate = 0;

const maxRate = 6;

export default function list({className}:{className:string}) {
  const [open, setOpen] = React.useState(true);

  const [mamad, setMamad] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const mamadClick = () => {
    setOpen(!mamad);
  };

  const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [values, setValues] = React.useState([MIN, MAX]);

  const [rates, setRates] = React.useState([minRate, maxRate]);

  const handleChange = (values: any) => {
    setValues(values);
    dispatch(priceProduct(values));
  };

  const handleRate = (rates: any) => {
    setRates(rates);
    dispatch(rateProduct(rates));
  };

  const dispatch = useAppDispatch();

  return (
    <div style={{ display: "flex-col" }}>
      <Box
        marginBlock={"1rem"}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        color={"black"}
      >
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        <TextField
          id="standard-basic"
          label="search"
          variant="standard"
          onChange={(e: any) => {
            dispatch(searchProduct(e.target.value));
          }}
        />
      </Box>

      <div style={{ maxWidth: "14rem", marginInline:"1rem" }}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              marginInline: "1rem",
              display: "flex",
              justifyItems: "space-between",
            }}
          >
            <CategoryIcon /> <Typography> Category</Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <ul
              style={{
                flexDirection: "column",
                paddingLeft: "2rem",
                gap: "2rem",
              }}
            >
              {category.map((item, index) => (
                <li key={index}>
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e: any) =>
                      dispatch(
                        categoryProduct([e.target.checked, e.target.value])
                      )
                    }

                    // onChange={handleCategory}
                  />
                  <label
                    htmlFor={item}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <AttachMoneyIcon /> <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col pl-2">
                {/* <h2>Price Range</h2> */}
                <div className="mx-auto values">
                  ${values[0]} - ${values[1]}
                </div>
                <ReactSlider
                  className="horizontal-slider bg-gray-500 w-full h-2 rounded-xl mt-1"
                  value={values}
                  // value={10000}
                  min={MIN}
                  max={MAX}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  onChange={handleChange}
                  pearling
                  minDistance={10}
                />
              </li>
            </ul>

            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography> */}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <GradeIcon /> <Typography>Range</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <ul className="flex flex-col gap-4">
              <li className="flex flex-col pl-2">
                {/* <h2>Price Range</h2> */}
                <div className="mx-auto values">
                  {rates[0]} - {rates[1]}
                </div>
                <ReactSlider
                  className="horizontal-slider bg-gray-500 w-full h-2 rounded-xl mt-1"
                  value={rates}
                  // value={10000}
                  min={minRate}
                  max={maxRate}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  onChange={handleRate}
                  pearling
                  minDistance={0.5}
                />
              </li>
            </ul>
            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography> */}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
