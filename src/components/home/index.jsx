import { Box, Container, Stack, Typography } from "@mui/material";
import img1 from "../../img/blue-bg1.jpg";
import "./style.css";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.2)",
          height: "100%",
        }}
      />
      <Container
        maxWidth
        sx={{
          position: "absolute",
          top: 100,
        }}
      >
        <Container
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography
              sx={{
                fontSize: "3vw",
                color: "#f53b3e",
                fontWeight: 'bold'
              }}
            >
              Welcome To
            </Typography>
            <Typography
              variant="h2"
              data-text="CleanYoutube"
              className="animationText"
              sx={{
                fontSize: "3vw",
                fontWeight: 'bold'
              }}
            >
              CleanYoutube
            </Typography>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default Home;
