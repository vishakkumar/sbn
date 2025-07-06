import { Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const AboutUs = () => {
  return (
    <Box
      sx={{
        background: "rgb(223, 223, 223)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        mt: 3,
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        color="red"
        sx={{ mb: 4 }}
      >
        About Us
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          mx: "auto", // center the grid container
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Business */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" color="rgb(155, 152, 152)" gutterBottom>
            Business
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button sx={buttonStyle}>Pricing</Button>
            <Button sx={buttonStyle}>Register Your Business</Button>
            <Button sx={buttonStyle}>Become Delivery Partner</Button>
          </Box>
        </Grid>

        {/* Store */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" color="rgb(155, 152, 152)" gutterBottom>
            Store
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button sx={buttonStyle}>Policy</Button>
            <Button sx={buttonStyle}>Support</Button>
            <Button sx={buttonStyle}>Raise Ticket</Button>
            <Button sx={buttonStyle}>Account Profile</Button>
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" color="rgb(155, 152, 152)" gutterBottom>
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button sx={buttonStyle}>News</Button>
            <Button sx={buttonStyle}>Careers</Button>
            <Button sx={buttonStyle}>Privacy</Button>
            <Button sx={buttonStyle}>About SPN</Button>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline", mb: 1 }}
            color="rgb(155, 152, 152)"
          >
            Social Media
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button startIcon={<InstagramIcon />} sx={buttonStyle}>
              Instagram
            </Button>
            <Button startIcon={<FacebookIcon />} sx={buttonStyle}>
              Facebook
            </Button>
            <Button startIcon={<LinkedInIcon />} sx={buttonStyle}>
              LinkedIn
            </Button>
            <Button startIcon={<WhatsAppIcon />} sx={buttonStyle}>
              WhatsApp
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Typography
        sx={{
          color: "rgb(139, 139, 68)",
          textAlign: "center",
          mt: 4,
          maxWidth: "900px",
          mx: "auto",
          fontSize: "0.9rem",
        }}
      >
        "SPN - Connecting You to Trusted Services, 100% Verified!"
        <br />
        "SPN (Service Provider Network) is a trusted advertising platform
        connecting customers with verified service providers across various
        industries. We ensure that every service provider on our platform
        undergoes a thorough verification process, guaranteeing reliability,
        professionalism, and quality service. Whether you're looking for
        electricians, plumbers, carpenters, photographers, or other skilled
        professionals, SPN makes it easy to find and connect with trusted
        experts. Our mission is to bridge the gap between customers and
        service providers, ensuring a seamless and hassle-free experience for
        both. Advertise your services with us and grow your business in a
        trusted network!"
      </Typography>
    </Box>
  );
};

// Button Style
const buttonStyle = {
  color: "gray",
  mt: "8px",
  fontSize: "0.75rem",
  textTransform: "capitalize",
  justifyContent: "flex-start",
};

export default AboutUs;


// import { Box, Button, Typography, Grid } from "@mui/material";
// import React from "react";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';


// const AboutUs = () => {
//   return (
//     <Box>
//       <Box
//         sx={{
//           background: "rgb(223, 223, 223)",
//           borderBottomLeftRadius: "20px",
//           borderBottomRightRadius: "20px",
//           marginTop: "20px",
//           padding: "20px",
//         }}
//       >
//         <Typography variant="h2" textAlign="center" color="red">
//           About Us
//         </Typography>

//         <Grid
//           container
//           spacing={2}
//           sx={{
//             width: "100%",
//             marginTop: "20px",
//             textAlign: "center",
//             display: "flex",
//             justifyContent: "flex-start",
//           }}
//         >
//           <Grid item xs={12} sm={4} md={2}>
//             <Typography variant="h5" color="rgb(155, 152, 152)">
//               Business
//             </Typography>
//             <Box sx={{display: "flex",flexDirection: "column"}}>
//               <Button sx={buttonStyle}>Pricing</Button>
//               <Button sx={buttonStyle}>Register Your Business</Button>
//               <Button sx={buttonStyle}>Become Delivery Partner </Button>
              
//               </Box>
//           </Grid>

//           <Grid item xs={12} sm={4} md={2}>
//             <Typography variant="h5" color="rgb(155, 152, 152)">
//               Store
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Button sx={buttonStyle}>Policy</Button>
//               <Button sx={buttonStyle}>Support</Button>
//               <Button sx={buttonStyle}>Raise Ticket</Button>
//               <Button sx={buttonStyle}>Account Profile</Button>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={4} md={2}>
//             <Typography variant="h5" color="rgb(155, 152, 152)">
//               Company
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Button sx={buttonStyle}>News</Button>
//               <Button sx={buttonStyle}>Careers</Button>
//               <Button sx={buttonStyle}>Privacy</Button>
//               <Button sx={buttonStyle}>About SPN</Button>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4} md={2}>

//           </Grid>
//           <Grid item xs={12} sm={4} md={4}>
//             <Typography variant="h5" sx={{ textDecoration: 'underline' }} color="rgb(155, 152, 152)">
//               Social Media
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Button startIcon={<InstagramIcon />} sx={buttonStyle}>Instagram</Button>
//               <Button startIcon={<FacebookIcon />} sx={buttonStyle}>Facebook</Button>
//               <Button startIcon={<LinkedInIcon />} sx={buttonStyle}>LinkedIn</Button>
//               <Button startIcon={<WhatsAppIcon />} sx={buttonStyle}>What's App</Button>
//             </Box>
//           </Grid>

//         </Grid>

//         <Typography
//           sx={{
//             color: "rgb(139, 139, 68)",
//             textAlign: "center",
//             marginTop: "20px",
//           }}
//         >
//           "SPN - Connecting You to Trusted Services, 100% Verified!"
//           <br />
//           "SPN (Service Provider Network) is a trusted advertising platform
//           connecting customers with verified service providers across various
//           industries. We ensure that every service provider on our platform
//           undergoes a thorough verification process, guaranteeing reliability,
//           professionalism, and quality service. Whether you're looking for
//           electricians, plumbers, carpenters, photographers, or other skilled
//           professionals, SPN makes it easy to find and connect with trusted
//           experts. Our mission is to bridge the gap between customers and
//           service providers, ensuring a seamless and hassle-free experience for
//           both. Advertise your services with us and grow your business in a
//           trusted network!"
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// // Button Style
// const buttonStyle = {
//   color: "gray",
//   marginTop: "10px",
//   fontSize: "10px",
//   textDecoration: "none",
//   textTransform: "capitalize",
// };

// export default AboutUs;





// import { Box, Button, Typography, Grid } from '@mui/material';
// import React from 'react';

// const AboutUs = () => {
//   return (
//     <Box> 
//       <Box sx={{ background: "white", borderBottomLeftRadius: '20px', borderBottomRightRadius: "20px", marginTop: '20px', padding: '20px',background:'rgb(223, 223, 223)', }}>
//         <Typography variant="h2" textAlign="center" color="red">
//           About Us
//         </Typography>
        
//         <Grid container  sx={{width:'100%', marginTop: '20px',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
//           <Grid item lg={2}>
//             <Typography variant="h6" color="rgb(155, 152, 152)">Business</Typography>
//             <Box sx={{borderRight:'1px solid gray',display:'flex',flexDirection:'column'}}>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >Register Your Business </Button>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >Pricing </Button>
//             </Box>
//           </Grid>
//           <Grid item lg={2} textAlign="center">
//             <Typography variant="h6" color="rgb(155, 152, 152)">Company</Typography>
//             <Box sx={{borderRight:'1px solid gray',display:'flex',flexDirection:'column'}}>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >News </Button>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >Careers </Button>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >Privacy </Button>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >About SPN </Button>
            

            
//             </Box>

//           </Grid>

//         <Grid item lg={2} textAlign="center">
//             <Typography variant="h6" color="rgb(155, 152, 152)">Store</Typography>
//             <Box sx={{borderRight:'1px solid gray',display:'flex',flexDirection:'column'}}>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >Account Profile </Button>
//             <Button onClick={() => alert("Button clicked!")}
//               sx={{color:'gray', marginTop: '10px',fontSize:'10px',textDecoration:'none', 
//                 textTransform: 'capitalize' }}
//             >Store Support </Button>
//             </Box>
//           </Grid>

//         </Grid>
        

//         <Typography sx={{ color: 'rgb(139, 139, 68)', textAlign: 'center', marginTop: '20px' }}>
//           "SPN - Connecting You to Trusted Services, 100% Verified!"<br/>
//           "SPN (Service Provider Network) is a trusted advertising platform connecting customers with verified service providers across various industries. We ensure that every service provider on our platform undergoes a thorough verification process, guaranteeing reliability, professionalism, and quality service. Whether you're looking for electricians, plumbers, carpenters, photographers, or other skilled professionals, SPN makes it easy to find and connect with trusted experts. Our mission is to bridge the gap between customers and service providers, ensuring a seamless and hassle-free experience for both. Advertise your services with us and grow your business in a trusted network!"
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;
