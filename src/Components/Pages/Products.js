/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { Grid, Paper, Container } from "@mui/material";
import {add} from '../Store/CartSlice';
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function FetchApi() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = (item) => {
      dispatch( add(item))
  }
  const Navigate = useNavigate();
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={0}>
          {data.map((item) => (
            <Box width="350px">
              <Card>
                <Grid item xs={20}>
                  <Paper>
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
                    <CardActions>
                      <Button size="small" onClick={() => handleAdd(item)}>Add to cart</Button>
                      <Button size="small" onclick={()=> Navigate(`ProductDetails/${item._id}`)}>View Details</Button>
                    </CardActions>
                  </Paper>
                </Grid>
              </Card>
            </Box>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default FetchApi;
