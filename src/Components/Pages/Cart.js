import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout/Layout";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { add, remove } from "../Store/CartSlice";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Wrapper>
          <Title>Your Bag</Title>
          <Top>
          <Link to={"/products"}><TopButton>Continue Shopping</TopButton></Link>
            <TopButton type="filled">CheckOut Now</TopButton>
          </Top>
          <Bottom>
            <Info>
              {products.map((item) => (
                <div className="cart-card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={item.thumbnail}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography>${item.price}</Typography>
                      <Typography>Ratings : {item.rating}</Typography>
                    </CardContent>
                    <CardActions className="btn">
                      <Button size="large" onClick={() => handleAdd(item)}>
                        +
                      </Button>
                      <Button size="large" onClick={() => handleRemove(item.id)}>
                        -
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </Info>
            <Summary>Summary</Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Cart;
