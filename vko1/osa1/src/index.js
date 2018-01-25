import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
    

  return (
    <div>
      <Otsikko name={kurssi} />
      <Sisalto osat={osat} /> 
      <Yhteensa count={osat} />
    </div>
  )
}

const Sisalto = (props) => {
    return(
        <div>
            <p> {props.osat[0].nimi} {props.osat[0].tehtavia} </p>
            <p> {props.osat[1].nimi} {props.osat[1].tehtavia} </p>
            <p> {props.osat[2].nimi} {props.osat[2].tehtavia} </p>
        </div>
    )
}

const Otsikko = (props) => {
    return(
        <h1> {props.name} </h1>
    )
}

const Yhteensa = (props) => {
    return(
        <p>yhteensä {props.count[0].tehtavia + props.count[1].tehtavia + props.count[2].tehtavia} tehtävää</p>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)