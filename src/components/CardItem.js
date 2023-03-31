import React from "react";
import { Link } from "react-router-dom";

export const CardItem = (props) => {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h4>{props.subTitle}</h4>
            <p>{props.cards_item_info}</p>
          </div>
        </Link>
      </li>
    </>
  );
};
