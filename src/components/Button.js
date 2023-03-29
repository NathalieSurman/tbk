import React from 'react'
import { Link } from 'react-router-dom';
import "./Button.css"

//-- These are our CSS classes --//
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ 
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize}) => {

//---We want to see if the getting component has a button style, if it is true it will be the style we created for it --
//--- and If it is not true we want to set the value to style the first option in our styles array ---///
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    //--This is the same thing but with SIZE ---//
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/booknow' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}


