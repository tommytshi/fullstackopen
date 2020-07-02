import React from 'react'

const Header = (props) => {

  return (
    <div>
      <h2> {props.course} </h2>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises} </p>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  const details = parts.map(part => <Part key= {part.id} name={part.name} exercises={part.exercises} />)

  return (
    <div>
    {details}
    </div>
  )
}

const Total = (props) => {

  const parts = props.course.parts
  const totalExercises = parts.map(part => part.exercises).reduce((accumulator, currentValue) => {
   console.log('whats here', accumulator, currentValue)
   return(
         accumulator + currentValue)},0)

  return (
    <h3> Total of {totalExercises} exercises </h3>
  )
}

const Course = ({course}) => {
  console.log('course')
  return(
    <div>
    <Header course = {course.name} />
    <Content course = {course} />
    <Total course={course} />
    </div>
  )
}

export default Course
