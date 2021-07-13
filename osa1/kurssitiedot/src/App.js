import React from "react"


const Header = (props) => {
return  (
  <h1>{props.kurssi.name}</h1>
)
}

const Content = (props) => {
  
console.log(props)
const parts = props.course.parts

  return(
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const exercises = props.course.parts
  return(
    <div>
    <p>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises} </p>
    </div>
  )
}

const Part = (props) => {

  return(
   <p>{props.part.name + " " +  props.part.exercises}</p>
  )
}




const App = () => {


  const course = {
  name: 'Half Stack Application developement',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 11
  },
  
  {
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    name: 'State of Component',
    exercises: 14
  }
  
  ]
  }

  return (
    <div>

      <Header kurssi={course}/>
      <Content course={course} />
      <Total course={course}/>
      
    </div>
  )
}

export default App
