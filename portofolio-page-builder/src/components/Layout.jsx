import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col w-full h-max justify-center items-center">
      {children}
    </section>
  );
};

export default Layout;
