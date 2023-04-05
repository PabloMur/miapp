import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { TecPage } from "../pages/Tec";
import { Aboutme } from "../pages/Aboutme";
import { ContactPage } from "../pages/Contact";
import { Proyects } from "../pages/Proyects";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="stack" element={<TecPage />}></Route>
        <Route path="about" element={<Aboutme />}></Route>
        <Route path="proyects" element={<Proyects />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
