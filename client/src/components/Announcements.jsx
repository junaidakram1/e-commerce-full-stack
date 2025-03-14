import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  /* margin: 5px 10px; */
`;

const Announcements = () => {
  return <Container>Free Shipping on Orders Above Rs. 3000</Container>;
};

export default Announcements;
