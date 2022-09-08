import './titles.css'

export const Title = ({ txt }) => {
    return (
        <div className='Title'>
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
