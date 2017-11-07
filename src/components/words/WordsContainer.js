import React, {Component} from 'react'
import WordGrid from './WordGrid'


class WordsContainer extends Component {


  render() {
    return (
      <div>
        <WordGrid words={this.props.words} clickedWord={this.props.clickedWord} />
      </div>
    )
  }
}

export default WordsContainer
