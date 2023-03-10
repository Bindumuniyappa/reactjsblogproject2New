import React from 'react'
import { NavLink } from 'react-router-dom';

const CardHome = (props) => {
    const { imgUrl, title, description, articleid } = props;
    return (
        <NavLink state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`article/${articleid}`}>
            <div className={articleid}>
                <div className="cardHome" >
                    <div className='card__image'>
                        <img src={imgUrl} alt="not found" />
                    </div>
                    <div className='home__bigcard__data'  >
                        <h3 style={{color:'red'}} >{title}</h3>
                        <br/>
                        <p style={{color:'green'}}>{description}</p>
                    </div>
                </div>
                <hr style={{ fontWeigth: "30px", color: "black" }} />
            </div></NavLink>
    )

}

export default CardHome;