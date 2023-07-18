import { Grid, Typography, Container,Box } from '@mui/material'
import React from 'react'
import '../../Styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
    <br/>
    <br/>
    <Container sx={{ bgcolor: "black"  }}>
        <Grid container spacing={3} className='grid-container'>
            <Grid item xs={12} sm={6} md={4} lg={3} className='grid-item'>
                <Typography variant='h6' sx={{margin:'15px'}}> Shop By </Typography>
                <Typography sx={{margin:'15px'}} > Men </Typography>
                <Typography sx={{margin:'15px'}}> Women </Typography>
                <Typography sx={{margin:'15px'}}> Kids </Typography>
                <Typography sx={{margin:'15px'}}> New Arrival </Typography>
                <Typography sx={{margin:'15px'}}> Collections </Typography>
                <Typography sx={{margin:'15px'}}> Home </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Typography variant='h6'sx={{margin:'15px'}}> Resources </Typography>
                <Typography sx={{margin:'15px'}}> Resource Center </Typography>
                <Typography sx={{margin:'15px'}}> Testimonals </Typography>
                <Typography sx={{margin:'15px'}}> Blog </Typography>
                <Typography sx={{margin:'15px'}}> Docs </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Typography variant='h6'sx={{margin:'15px'}}> Help </Typography>
                <Typography sx={{margin:'15px'}}> Payment </Typography>
                <Typography sx={{margin:'15px'}}> Shipping </Typography>
                <Typography sx={{margin:'15px'}}> Cancellation & Return </Typography>
                <Typography sx={{margin:'15px'}}> FAQ </Typography>
                <Typography sx={{margin:'15px'}}> Customer Care </Typography>
            </Grid>
            <Grid item >
                <Typography variant='h6'sx={{margin:'15px'}}> Company</Typography>
                <Typography sx={{margin:'15px'}}> About Us </Typography>
                <Typography sx={{margin:'15px'}}> Press </Typography>
                <Typography sx={{margin:'15px'}}>Career </Typography>
                <Typography sx={{margin:'15px'}} > Contact Us </Typography>
            </Grid>
            <Grid item>
            <Typography variant='h6'sx={{margin:'15px'}}> Reach out to us</Typography>
                <FacebookIcon sx={{margin:'15px'}}/>
                <LinkedInIcon sx={{margin:'15px'}}/>
                <TwitterIcon sx={{margin:'15px'}}/>
                <InstagramIcon sx={{margin:'15px'}}/>
            </Grid>
        </Grid>
        <Box sx={{textAlign: 'center', bgcolor: 'black' ,color: 'white', p:1.5}}>
        <Typography variant='h7'>
            All Rights Reserved &copy;2023 E-Commerce
        </Typography>
        </Box>
    </Container>
    </>
)}

export default Footer
