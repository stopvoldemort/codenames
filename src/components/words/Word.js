import React from 'react'

const Word = (props) => {

  const handleClick = () => {
    props.clickedWord(props.word)
  }

  const showAnswer = () => {
    if (props.clicked || props.view==="spyMaster") {
      return props.type
    } else return ""
  }

  return (
    <div>
      <h3 x={props.x} y={props.y} className={`word ${showAnswer()}`} onClick={handleClick} >
        {props.word}
      </h3>
    </div>
  )
}

export default Word
