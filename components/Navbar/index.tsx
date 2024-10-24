"use client";

import Image from "next/image";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import _ from "lodash";
import { Divider } from "@mui/material";
import Link from "next/link";

export const Navbar = () => {
  let QTY = [];

  const vn = [];

  const cart = useAppSelector((state) => state.Cart.cart);

  const zx = _.cloneDeep(cart);

  console.log("ZX  == ", zx);

  for (let i = 1; i <= zx.length; i++) {
    if (zx[i] && zx[i].Title) {
      vn.push({
        ID: zx[i].Title.id,
        Title: zx[i].Title.title,
        QTY: zx[i].qty,
      });
      QTY.push(zx[i].qty);
    }
  }
  console.log("QTY   === > ", QTY);

  var sum = QTY.reduce((accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
  }, 0);

  console.log("VN === > ", vn);

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const pages = ["product", "blog", "checkout", "about"];

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const truncateString = (str: any) =>
    str.length > 23 ? str.slice(0, 23) : str;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Si Roush Shop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                href={`/${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                style={{ position: "relative" }}
              >
                {/* <Avatar style={{color:"red",position:"absolute",bottom:"1rem",zIndex:"10",backgroundColor:"black"}}>{sum}</Avatar> */}
                <Avatar alt="Remy Sharp" src="./favicon.ico" />

                {sum && isClient ? (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      zIndex: "99",
                      color: "white",
                      backgroundColor: "green",
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                    }}
                  >
                    {sum}
                  </div>
                ) : null}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {vn ? (
                <div>
                  <Typography textAlign="justify">Cart : </Typography>
                  <div className="bg-yellow-200 rounded mx-5 mb-2 border border-slate-600 border-b-2 ">
                    {vn.map((df) => (
                      <Typography textAlign="left" key={df.ID}>
                        {df.Title} &nbsp; &nbsp;
                        {df.QTY}
                      </Typography>
                    ))}
                  </div>{" "}
                  <Link
                    href={"/checkout"}
                    className="btn bg-green-800 w-full h-5 rounded-lg flex justify-center items-center my-auto p-5  text-white"
                  >
                    Check out
                  </Link>
                </div>
              ) : null}
              <Divider />

              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
