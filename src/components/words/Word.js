import React from 'react'

const Word = (props) => {



  const handleClick = (ev) => {
    ev.preventDefault()
    props.clickedWord(ev.target.innerText)
    // add picture
  }

  return (
    <div>
      <h3 x={props.word.x} y={props.word.y} className="letter" onClick={handleClick} >
        {props.word.word}
      </h3>
    </div>
  )
}

export default Word
