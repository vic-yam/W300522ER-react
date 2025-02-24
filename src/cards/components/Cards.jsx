import { Grid, Typography } from "@mui/material";
import Card from "./card/Card";

const Cards = ({cards}) => {
  const handleDeleteCard = (cardId) => console.log(`Delete card: ${cardId}`);
  const handleLikeCard = (cardId) => console.log(`Like card: ${cardId}`);
 
  if (!cards.length) {
    return (
      <Typography>Ooops.. it seams that there are no cards to show</Typography>
    );
  }

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
            <Card
              key={card._id}
              card={card}
              handleDeleteCard={handleDeleteCard}
              handleLikeCard={handleLikeCard}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Cards;
