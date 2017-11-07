import React, {Component} from 'react'
import WordsContainer from '../words/WordsContainer'


class GameContainer extends Component {

  state = {
    assignments: []
  }

  getStartingWords = () => {
    const allWords = require('../words/AllWords').allWords
    allWords.sort( function() { return 0.5 - Math.random() } )
    return allWords.slice(0, 25)
  }

  wordSorter(a, b) {
    const aSortValue = (a.x + (a.y*50))
    const bSortValue = (b.x + (b.y*50))
    if (aSortValue < bSortValue) return -1
    return 1
  }

  componentDidMount = () => {
    const assignments = this.assignWords()
    this.setState(assignments)
  }

  assignWords = () => {
    const words = this.getStartingWords()

    let allCoords = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    allCoords.sort( function() { return 0.5 - Math.random() } )

    let teamOneNums = allCoords.slice(0, 7)
    let teamTwoNums = allCoords.slice(7, 14)
    let assassinNum = allCoords.slice(14,15)
    let bystanderNums = allCoords.slice(15)

    const teamOneObj = this.assignWordType(teamOneNums, "teamOne", words)
    const teamTwoObj = this.assignWordType(teamTwoNums, "teamTwo", words)
    const assassinObj = this.assignWordType(assassinNum, "assassin", words)
    const bystanderObj = this.assignWordType(bystanderNums, "bystander", words)

    let result = [...teamOneObj, ...teamTwoObj, ...assassinObj, ...bystanderObj]
    result.sort(this.wordSorter)

    return ({assignments: result})
  }

  assignStartingNumToCoords = (number) => {
    const coord = {}
    coord.y = Math.floor(parseInt(number, 10) / 5) + 1
    coord.x = parseInt(number, 10) % 5 + 1
    return coord
  }

  assignWordType = (arr, type, words) => {
    return arr.reduce((agg, num) => {
      let obj = this.assignStartingNumToCoords(num)
      obj.type = type
      obj.word = words[num]
      obj.clicked = false
      return agg.concat(obj)
    }, [])
  }

  clickedWord = (word) => {
    const assignments = this.state.assignments.map(w => {
      if (w.word===word) {
        w.clicked=true
        return w
      } else return w
    })
    this.setState({assignments})
  }

  render() {
    return (
      <div>
        <h1>Welcome To Codenames!!!</h1>
        <WordsContainer words={this.state.assignments} clickedWord={this.clickedWord}/>
      </div>
    )
  }
}

export default GameContainer
