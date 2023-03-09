import "./pageHeader.css";
import { Typography } from "@mui/material";


const PageHeader = () => {
    const header = "pageHeader works! string interpolation";
    
    const headLineStyle = {
        color: "red",
        fontFamily: "Roboto, sans-serif"
    };

    // React.createElement("h2", {style: headLineStyle}, header);

    return (
        <>
            <h2 style={headLineStyle}>{header}</h2>
            <p style={{color: 'green', marginTop: "5px"}}> inline style</p>
            <p className="blue"> style from module</p>
            <h4>One</h4>
            <Typography fontWeight={300} variant="h5" component="span">One</Typography>
            <Typography fontWeight={400} variant="h5" component="span">One</Typography>
            <Typography fontWeight={500} variant="h5" component="span">One</Typography>
            <Typography fontWeight={700} variant="h5" component="span">One</Typography>
        </>
    );
}

export default PageHeader;