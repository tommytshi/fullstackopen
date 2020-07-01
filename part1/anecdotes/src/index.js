import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text} </button>
)

const Random = () => (
  Math.floor(Math.random()*anecdotes.length)
)

const DisplayStats = (props) => (
  <p> has {props.value} votes </p>
)

const MaxVotes = (props) => {

    const indexOfMaxValue = props.arr.indexOf(Math.max(...props.arr))

    return (
      <div>
      <h1> Anecdote with most votes </h1>
      <p> {anecdotes[indexOfMaxValue]} </p>
      </div>
    )
  }


const App = (props) => {
  const [selected, setSelected] = useState(Random)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const giveVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }


  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p> {props.anecdotes[selected]} </p>
      <DisplayStats value= {votes[selected]} />
      <Button handleClick = {() => giveVote(selected)} text = "vote" />
      <Button handleClick = {() => setSelected(Random)} text= "next anecdote" />
      <MaxVotes arr={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
