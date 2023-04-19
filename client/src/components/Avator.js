/*import React from 'react'

export default function Avator(props) {
  return (
    <div style ={{backgroundColor : "#009dff",borderRadius : "50%", padding : "5px 7px", cursor : "pointer", color : "white" ,position : "relative", right : " 70px" }}>{props.text}</div>
  )
}*/
import React from "react";

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none"
    }
    return (
      <div style={style}>
          { children }
      </div>
  )
}
export default Avatar;
