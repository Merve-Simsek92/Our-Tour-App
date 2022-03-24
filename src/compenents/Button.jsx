import React from 'react'
import "./Button.css"

function Button({className,children,onClickPrp}) {
  return (
    <div>
        <button className={className} onClick={onClickPrp}>{children}</button>
    </div>
  )
}

export default Button