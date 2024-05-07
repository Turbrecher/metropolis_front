import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Cookies } from "../components/cookies/Cookies";

export function PoliticaCookies() {
  return (
    <>
      <Header />
      <Nav />

      <Cookies/>

      <Footer />
    </>
  );
}
