import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  border-radius: 6px;
  overflow: hidden;

  transition: all 0.3s ease; /* Smooth transition for transform and box-shadow */

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); /* Light shadow overlay */
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0; /* Hide overlay on hover */
  }

  &:hover {
    transform: scale(1.01); /* Slight zoom-in effect */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: -0.5px -0.5px 0 grey, 0.5px -0.5px 0 grey, -0.5px 0.5px 0 grey,
    0.5px 0.5px 0 grey;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  z-index: 1000;
`;

const Button = styled.button`
  border: 2px solid transparent;
  padding: 10px 20px;
  background-color: white;
  color: gray;
  cursor: pointer;
  /* border: 0.5 solid black; */
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    background: teal;
    height: 100%;
    width: 0;
    left: 0;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    color: white;
    border-color: teal;
  }

  &:hover::before {
    width: 100%;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
