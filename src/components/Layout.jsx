import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Particles from "./magicui/particles";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen dark:invert">
        <Particles className="absolute inset-0 z-0" color="#ffffff" quantity={300} />
        <Navbar className="sticky top-0 z-10" />
        <motion.main
          className="relative flex-grow z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.main>
      </div>
      <Footer className="relative overflow-scroll z-20" />
    </>
  );
};

export default Layout;
