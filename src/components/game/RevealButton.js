import React from 'react'

const RevealButton = (props) => {

  const handleClick = () => {
    props.revealButtonClicked()
  }

  const textToShow = () => {
    return (props.view==="fieldAgent") ? "Spy Master" : "Field Agent"
  }

  return (
    <button onClick={handleClick}>Switch to {textToShow()} view</button>
  )

}

export default RevealButton
