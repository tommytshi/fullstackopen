import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick = {props.handleClick}> {props.text}</button>
)

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = (good + neutral + bad)
  const goodBad = (good + bad)
  const net = (good - bad)
  const average = net/goodBad
  const positive = good/all * 100

  if (all === 0) {
    return (
      <div>
      <Header title="statistics"/>
      <p> No feedback given </p>
      </div>
    )
  }

  return (
    <div>
    <Header title="statistics"/>
    <table>
    <tbody>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="all" value={all} />
    <Statistic text="average" value={average} />
    <Statistic text="positive" value={positive}/>
    </tbody>
    </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header title="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
