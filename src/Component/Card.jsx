import React from "react";
import { NavLink,Link } from "react-router-dom";

const Card = (props) => {
    const { imgUrl, title, description, techId } = props;
    return (
        <Link to="/DetailPage">
        <NavLink 
            state={{
                title: title,
                img: imgUrl,
                description: description,
                id: techId,
            }}
            to={`${techId}`}
        >
            <div >
                <div className="cardContainer">
                    <div className="card__image">
                        <img src={imgUrl} alt="{not found}" />
                    </div>
                    <div className="bigCard">
                        <h5 style={{color:'red',fontSize:'20px'}}>{title}</h5>
                        <br/>
                        <br/>
                        <p style={{color:'green'}}>{description}</p>
                    </div>
                </div>
                <hr style={{ fontWeigth: "40px", color: "black" }} />
            </div>
        </NavLink>
        </Link>
    );
};

export default Card;