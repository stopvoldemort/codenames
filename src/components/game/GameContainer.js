import React, {Component} from 'react'
import WordsGrid from '../words/WordsGrid'
import RevealButton from './RevealButton.js'
import RefreshButton from './RefreshButton.js'


class GameContainer extends Component {

  state = {
    assignments: [],
    view: "fieldAgent"
  }

  switchView = () => {
    const newView = (this.state.view==="fieldAgent") ? "spyMaster" : "fieldAgent"
    this.setState({view: newView}, () => {console.log(this.state.view)})
  }

  newGame = () => {
    const assignments = this.assignWords()
    this.setState(assignments)
  }

  getStartingWords = () => {
    const allWords = require('../words/AllWords').allWords
    allWords.sort( function() { return 0.5 - Math.random() } )
    return allWords.slice(0, 25)
  }

  wordSorter(a, b) {
    if ((a.x + (a.y*50)) < (b.x + (b.y*50))) return -1
    return 1
  }

  componentDidMount = () => {
    const assignments = this.assignWords()
    this.setState(assignments)
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
      }
      return w
    })
    this.setState({assignments})
  }

  assignWords = () => {
    const words = this.getStartingWords()

    let allCoords = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    allCoords.sort( function() { return 0.5 - Math.random() } )

    let teamOneNums = allCoords.slice(0, 9)
    let teamTwoNums = allCoords.slice(9, 17)
    let assassinNum = allCoords.slice(17,18)
    let bystanderNums = allCoords.slice(18)

    const teamOneObj = this.assignWordType(teamOneNums, "teamOne", words)
    const teamTwoObj = this.assignWordType(teamTwoNums, "teamTwo", words)
    const assassinObj = this.assignWordType(assassinNum, "assassin", words)
    const bystanderObj = this.assignWordType(bystanderNums, "bystander", words)

    let result = [...teamOneObj, ...teamTwoObj, ...assassinObj, ...bystanderObj]
    result.sort(this.wordSorter)

    return ({assignments: result})
  }

  render() {
    return (
      <div>
        <h1>Welcome To Codenames!!!</h1>
        <WordsGrid words={this.state.assignments} clickedWord={this.clickedWord} view={this.state.view}/>
        <br/><br/><br/>
        <span>
          <RevealButton revealButtonClicked={this.switchView} view={this.state.view}/>
          <span>     </span>
          <RefreshButton newGame={this.newGame}/>
        </span>
      </div>
    )
  }
}

export default GameContainer
