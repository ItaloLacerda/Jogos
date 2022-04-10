import react from "react";


function square (props) {

    const { className, onClick, name} = props;
    
    


    return(
        <div className={className}   onClick={onClick} >{name}</div>
    )
}

export default square;
