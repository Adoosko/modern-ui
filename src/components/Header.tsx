import React from "react";
import WordMark from "./WordMark";
import Navbar from "./Navbar";
import { createClient } from "@/prismicio";
import Hero from "@/slices/Hero";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header>
      <Navbar settings={settings} />
    </header>
  );
};

export default Header;
