import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box, CircularProgress, Typography, Grid } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = [
          {
            image: "https://www.automationroboticscollege.com/wp-content/uploads/2023/04/Electrical-Technician-India-min.jpg",
            service:'Electrician',
            discription:"Our professional electrician services ensure the safety, efficiency, and reliability of your electrical systems. Whether you need installation, repair, maintenance, or troubleshooting, our expert electricians are here to help.",
          },
          {
            image: "https://thumbs.dreamstime.com/b/handyman-repairing-faucet-sink-bathroom-maintenance-household-assistance-concept-close-up-indian-plumber-264239059.jpg",
            discription:" Our expert plumbing services cover everything from leak repairs and pipe installations to drainage solutions and water heater maintenance. We ensure reliable, efficient, and long-lasting plumbing solutions for homes and businesses.",
            service:'Plumbing Service',
          },
          {
            image: "https://img.freepik.com/premium-photo/carpenter-woodwork-furniture-making-carpentry-workshop_130181-1177.jpg?w=2000",
            discription:"Our professional carpentry services provide custom woodwork solutions, including furniture making, repairs, and interior wood design. Whether you need elegant wooden décor, durable cabinetry, or structural woodwork, our skilled craftsmen ensure precision and quality.",
            service:'Wood Works And Design',
          },
          {
            image: "https://miro.medium.com/v2/resize:fit:509/1*wIDCd0nN3SFiPo2miQ0f7w.jpeg",
            discription:" Our expert computer services include troubleshooting, repairs, software installation, virus removal, and hardware upgrades. Whether it's a slow PC, network issues, or data recovery, our skilled technicians ensure smooth and efficient system performance. ",
            service:'Computer Service',
          },
          {
            image: "https://static.wixstatic.com/media/b40a18_8e2d2ca62e0a4f86860de5c45d7289a6~mv2.jpg/v1/fill/w_900,h_479,al_c,q_85/b40a18_8e2d2ca62e0a4f86860de5c45d7289a6~mv2.jpg",
            discription:"We provide reliable and high-quality building construction services, from residential and commercial projects to renovations and structural improvements. Our expert team ensures strong foundations, modern designs, and efficient project execution, delivering durable and aesthetically pleasing constructions.",
            service:'Bulding Construction',
          },
          {
            image: "https://1.bp.blogspot.com/-uU5Ro05L10Q/VP6Wvbxp4-I/AAAAAAAABeY/W2MRe8WOFPI/s1600/AAAA.jpg",
            service:'Catering Service',
            discription:"Our professional catering service offers delicious and well-presented meals for all occasions, including weddings, corporate events, parties, and gatherings. We provide a variety of cuisines, customized menus, and high-quality ingredients to ensure a memorable dining experience for your guests.",
          },
          {
            image: "https://th.bing.com/th/id/OLC.y2HOxfJe0alQ6g480x360?&rs=1&pid=ImgDetMain",
            service:'Professional Photography ',
            // business_name: "Friends Digital Studio",
            discription:"Capture life’s most precious moments with our professional photography services. Whether it’s weddings, corporate events, portraits, or special occasions, we provide high-quality images that tell a story. Our skilled photographers use the latest equipment and creative techniques to deliver stunning, timeless photos. From candid shots to artistic compositions, we ensure every moment is beautifully preserved.",
          },
        ];
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ width: "95%", position: "relative", borderRadius: "10px" }}>
      {products.length > 0 ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ clickable: true }}
          // pagination
          loop
          style={{ borderRadius: "10px" }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} >
              <Grid
                container
                spacing={2}
                sx={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >

                <Grid item xs={6} sx={{ height:'300px', width:'40%',display:'flex',justifyContent:'center',alignItems:'flex-end',flexDirection:'column',textAlign:'right',color:'rgb(255, 0, 0)' }}>
                <Typography variant="h4"sx={{color:'#FBA518'}}>
                    {product.business_name}
                  </Typography>
                  <Typography variant="h6"sx={{color:'#FBA518'}}>
                    {product.service}
                  </Typography>

                  <Typography sx={{width:'80%',color:'gray'}}>
                  "{product.discription}"
                  </Typography>
                  {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    ${product.price}{" "}
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ textDecoration: "line-through", opacity: 0.6, marginLeft: "5px" }}
                    >
                      ${Math.round(product.price / (1 - product.discount / 100))}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#FF5733", fontWeight: "bold", marginTop: "5px" }}>
                    {product.discount}% Off
                  </Typography> */}
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="img"
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit:'contain',
                      borderRadius: "10px",
                    }}
                  />
                </Grid>

              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "350px", }}>
          <CircularProgress sx={{color:'red'}} />
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;

