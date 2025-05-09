import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, TextField, MenuItem, InputLabel, Select, FormControl, Box, Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CLASSYADS
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Ads</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Login</Button>
          <Button variant="contained" color="primary">+ Post an Ad</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#e0f7fa', py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Largest Classifieds In The World
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          You can buy, sell anything you want.
        </Typography>

        <Container maxWidth="md">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <TextField fullWidth label="What are you looking for?" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="Location" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Category</InputLabel>
                <Select defaultValue="all">
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="realestate">Real Estate</MenuItem>
                  <MenuItem value="cars">Cars & Vehicles</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" fullWidth startIcon={<SearchIcon />}>Search</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Ads */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h5" gutterBottom>
          Featured Ads
        </Typography>
        <Grid container spacing={3}>
          {['House with Pool', 'Wooden Chair & Table', 'iPhone X', 'Red Luxury Car'].map((title, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://via.placeholder.com/300x140?text=${encodeURIComponent(title)}`}
                  alt={title}
                />
                <CardContent>
                  <Typography variant="subtitle1">{title}</Typography>
                  <Typography variant="body2" color="text.secondary">New York, USA</Typography>
                  <Typography variant="caption">⭐⭐⭐⭐⭐ 5 Reviews</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>Testimonials</Typography>
        <Avatar sx={{ mx: 'auto', width: 56, height: 56 }} src="https://via.placeholder.com/56" />
        <Typography variant="subtitle1">Bruce Rogers</Typography>
        <Typography variant="body2" sx={{ maxWidth: 600, mx: 'auto', mt: 1 }}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde reprehenderit aperiam quae et fugiat..."
        </Typography>
      </Box>

      {/* Blog Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>Our Blog</Typography>
        <Grid container spacing={4}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Card>
                <CardMedia
                  component="img"
                  height="160"
                  image="https://via.placeholder.com/300x160"
                />
                <CardContent>
                  <Typography variant="subtitle1">Many People Selling Online</Typography>
                  <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit...</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#263238', color: 'white', py: 4, px: 2 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">About</Typography>
              <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit...</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Navigation</Typography>
              <Typography variant="body2">About Us<br />Services<br />Testimonials<br />Contact Us</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Typography variant="body2">[social icons here]</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
