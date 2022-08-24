export const Title = ({ txt }) => {
    return (
        <div style={
            {
                paddingTop: "2rem",
                paddingLeft: "10%",
                paddingBottom: "2rem",
                fontStyle: "italic",
                fontSize: "4em",
                fontWeight: "bold",
                opacity: "0.8",
                textAlign: "left"
            }
        }>
            {txt}
        </div>
    );
}

export const Subtitle = ({ txt }) => {
    return (
        <div style={
            {
                fontStyle: "italic",
                fontWeight: "lighter",
                fontSize: "3em",
                borderBottom: "1px solid #ffffff7b",
                paddingBottom: "10px",
                textAlign: "center",
            }
        }>
            {txt}
        </div>
    );
}
