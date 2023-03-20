import { CardActionArea } from "@mui/material";
import MuiCard from "@mui/material/Card";
import CardActionBar from "./CardActionBar";
import CardBody from "./CardBody";
import CardHead from "./CardHead";

const Card = ({card}) => {
  
  return (
    <MuiCard sx={{ minWidth: 280, maxWidth: 350 }}>
      <CardActionArea sx={{ p: 2 }}>
        <CardHead image={card.image} />
        <CardBody card={card}></CardBody>
      </CardActionArea>
      <CardActionBar />
    </MuiCard>
  );
};

export default Card;
