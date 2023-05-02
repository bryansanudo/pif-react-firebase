import React from "react";

const Section = ({ children }) => {
  return (
    <section className=" flex flex-col justify-start items-center py-20 px-5 ">
      {children}
    </section>
  );
};

export default Section;
