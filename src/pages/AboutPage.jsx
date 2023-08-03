import { Box, Grid, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <img
            src={
              "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/89f45c02_bb65.jpg"
            }
            alt="Responsive"
            style={{
              maxWidth: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              width: "100vw",
            }}
          />
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Box
            maxWidth={800}
            p={3}
            mt={3}
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontFamily: "inherit", fontSize: 30 }}
            >
              At Everlane, we want the right choice to be as easy as putting on
              a great T-shirt. That’s why we partner with the best, ethical
              factories around the world. Source only the finest materials. And
              share those stories with you—down to the true cost of every
              product we make. It’s a new way of doing things. We call it
              Radical Transparency
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item p={10} xs={6} sx={{ backgroundColor: "rgb(223, 207, 223)" }}>
          {/* Left box with title and text */}
          <div style={{ padding: "20px" }}>
            <Typography variant="body1">Our QUALITY</Typography>
            <Typography variant="h3">
              Designed <br />
              to last.
            </Typography>
            <br />
            <p>
              s At Everlane, we’re not big on trends. We want you to wear our
              pieces for years, even decades, to come. That’s why we source the
              finest materials and factories for our timeless products— like our
              Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.{" "}
            </p>
            <br />
            <p>
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit
              them often and build strong personal relationships with the
              owners. Each factory is given a compliance audit to evaluate
              factors like fair wages, reasonable hours, and environment. Our
              goal? A score of 90 or above for every factory.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* Right image */}
          <img
            src={
              "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/06a23e68_6bda.jpg"
            }
            alt="Responsive"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={12}>
          <img
            src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/4f12c031_afae.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
