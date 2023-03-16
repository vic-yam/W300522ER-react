import CardMedia from '@mui/material/CardMedia';

const CardHead = ({ image }) => {
    // 1. extract url and alt from img
    const { url, alt } = image;

    // 2. return CardMedia component (mui)
    return <CardMedia height="200" component="img" image={url} alt={alt}  ></CardMedia>
}

export default CardHead;