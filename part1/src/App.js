import React from 'react'

const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = "Denssi"
  const ika = 13
  return(
  <>
      <h1>Greetings</h1>
      <Hello name="Paavo" age="22"/>
      <Hello name="Ukkeli" age={23+2}/>
      <Hello name={nimi} age={ika}/>
  </>
  )
}
export default App;
