import React,{useContext} from "react";
import ThemeContext  from "../context/ThemeContext";
import Colorthemes from "./Colorthemes";
const Product = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = Colorthemes[theme]
    return(        
        <div className="card" 
        style={{
            width: "18rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`
        }}
            >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body" 
                 style={{                   
                    color:`${currentTheme.textColor}`
                }}
            >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}
export default Product;