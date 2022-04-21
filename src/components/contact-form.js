/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";

const Contact = () => (
  <>
    <Themed.h3 sx={{ mt: 0 }}>Address</Themed.h3>
    <span>
      David Mathews
      <br />
      1011 Malesuada Road
      <br />
      Moscow Kentucky 77382
    </span>

    <Themed.h3>Phone</Themed.h3>
    <span>(357) 616-5411</span>

    <Themed.h3>Email</Themed.h3>
    <span>
      <Themed.a href="mailto:email@example.com">email@example.com</Themed.a>
    </span>
  </>
);

export default Contact;
