import React from "react";

const Container = ({ children, class: className }) => (
    <div className={className}>{children}</div>
);

export default Container;