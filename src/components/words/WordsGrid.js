import React from 'react'
import Word from './Word'


const WordsGrid = (props) => {

  const wordDivs = props.words.map((word, idx) => {
    return <Word {...word} key={idx} clickedWord={props.clickedWord} view={props.view} />
  })

  return (
    <div className="wrapper">
      {wordDivs}
    </div>
  )

}

export default WordsGrid
