import React from 'react'
import Word from './Word'


const WordGrid = (props) => {

  const wordDivs = props.words.map((word, idx) => {
    return <Word word={word} key={idx} clickedWord={props.clickedWord} />
  })


  return (
    <div className="wrapper">
      {wordDivs}
    </div>
  )

}

export default WordGrid
