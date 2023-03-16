import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const CardBody = ({ card }) => {
  const { title, subtitle, phone, address, bizNumber } = card;
  const { state, city, houseNumber } = address;

  return (
    <CardContent>
      <CardHeader
        title={title}
        subheader={subtitle}
        sx={{ p: 0, mb: 1 }}
      ></CardHeader>
      <Divider />
      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle2" component="strong">Phone:{" "}</Typography> {phone}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default CardBody;
