import "./pageHeader.css";


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
        </>
    );
}

export default PageHeader;