import Image from "next/image";
import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions, Input, InputBase, InputLabel,
} from "@mui/material";
import womanPregnant from "@/public/ImagenP.jpg";

export const LoginFilantropo = () => {
  return (
    <>
      <Box
        className="pb-12"
        sx={{
          overflow: "hidden",
          backgroundSize: "contain",
          textAlign: "center",
          height: "100vh",
        }}
        position="relative"
      >
        <Image
          src={womanPregnant}
          alt="Woman pregnant"
          quality={30}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "10% 25%",
            filter: "brightness(63%)",
          }}
        />
        <div className="relative w-full bg-black bg-opacity-70">
          <Container className="w-full flex py-3 max-w-screen-2xl">
            <Image
              src="/logo_horizontal-white.png"
              width={180}
              height={50}
              alt="logo"
              quality={100}
            />
          </Container>
        </div>
        <Container className="pt-32 max-w-screen-2xl">
          <Box position={"relative"} className="flex w-full">
            <Card
              sx={{
                minWidth: 275,
                margin: "10px",
                backgroundColor: "rgba(255,255,255, 0.180)",
                border: "1px solid rgba(255,255,255, 0.26)",
              }}
              className="w-1/3"
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "center",
                    }}
                    className="text-white"
                  >
                    Ingreso
                  </Typography>
                </CardContent>
                <CardActions className="flex flex-col w-full ">
                  <div className="flex self-start">
                    <label className="text-white font-semibold">Email</label>
                  </div>
                  <input
                    type="email"
                    placeholder="usuario@correo.com"
                    className="pl-5 pr-10 rounded-xl py-2 mt-3 w-full"
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LoginFilantropo;
