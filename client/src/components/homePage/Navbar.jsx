import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },

        mt: {
          sm: "32px",
          xs: "20px",
        },

        justifyConent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "110px", height: "100px", margin: "" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Workout Presets
        </a>

        <a href="login" style={{ textDecoration: "none", color: "#3A1212" }}>
          Log In
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
