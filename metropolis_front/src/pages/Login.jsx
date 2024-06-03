import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FormularioLogin } from "../components/autenticacion/FormularioLogin";
import { getCookie } from "../components/autenticacion/getCookie";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <Nav />
      <FormularioLogin />
      <Footer />
    </>
  );
}
