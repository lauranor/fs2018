import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko name={kurssi} />
      <Sisalto num={osa1} teht={tehtavia1} />
      <Sisalto num={osa2} teht={tehtavia2} />
      <Sisalto num={osa3} teht={tehtavia3} />
      <Yhteensa count={tehtavia1 + tehtavia2 + tehtavia3}/>
    </div>
  )
}

const Sisalto = (props) => {
    return(
        <p>{props.num} {props.teht}</p>
    )
}

const Otsikko = (props) => {
    return(
        <h1> {props.name} </h1>
    )
}

const Yhteensa = (props) => {
    return(
        <p>yhteensä {props.count} tehtävää</p>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)