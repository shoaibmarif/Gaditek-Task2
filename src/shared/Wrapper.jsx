import React from "react";

export const Wrapper = ({ children, classes }) => {
  return <div className={`container mx-auto  ${classes}`}>{children}</div>;
};
