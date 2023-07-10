import {
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
const CardApparelComponent = ({ URL, title, itemColor, price }) => {
  return (
    <Box>
      <Card square raised>
        <CardActionArea>
          <CardMedia component="img" image={URL} />
        </CardActionArea>
        <CardHeader title={title} subheader={itemColor}></CardHeader>
        <CardContent>
          <Typography>{price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" color="primary">
            Buy now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardApparelComponent;
