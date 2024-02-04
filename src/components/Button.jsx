import React from "react";

const Button = ({color, name}) => {
    console.log({color, name})
    return (
        <button className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`} style={{backgroundColor:"transparent", color:color, border:"2px solid "+color}}>
            {name}
        </button>
    );
};

export default Button;
