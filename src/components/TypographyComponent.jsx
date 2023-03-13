import { Typography } from "@mui/material";


const TypographyComponent = () => {


    return (
        <>

            <Typography color="error.light" fontWeight={300} variant="h1" component="div">light</Typography>
            <Typography color="error.main" fontWeight={400} variant="h2" component="div">main</Typography>
            <Typography color="error.dark" fontWeight={500} variant="h3" component="div">dark</Typography>

            <Typography align="center" color="success.light" fontWeight={300} variant="h1" component="div">center</Typography>
            <Typography align="left" color="success.main" fontWeight={400} variant="h2" component="div">left</Typography>
            <Typography align="right" color="success.dark" fontWeight={500} variant="h3" component="div">align</Typography>

            <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, assumenda veniam itaque enim repellat reiciendis sapiente amet, numquam atque maiores commodi? Expedita nesciunt voluptatum illum voluptas earum ad aliquid quo.</Typography>
            <hr />
            <Typography noWrap >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, assumenda veniam itaque enim repellat reiciendis sapiente amet, numquam atque maiores commodi? Expedita nesciunt voluptatum illum voluptas earum ad aliquid quo.</Typography>

            <Typography sx={{
                margin: 2,
                backgroundColor: "warning.main",
                padding: 2,
                textAlign: "center",
                color: "warning.contrastText"
            }}>SX</Typography>

            
            {/* 
            <Typography fontWeight={700} variant="h4" component="div">One</Typography>
            <Typography fontWeight={300} variant="h1" component="div">One</Typography>
            <Typography fontWeight={400} variant="h2" component="div">One</Typography>
            <Typography fontWeight={500} variant="h3" component="div">One</Typography>
            <Typography fontWeight={700} variant="h4" component="div">One</Typography> 
            */}
        </>
    );
}

export default TypographyComponent;