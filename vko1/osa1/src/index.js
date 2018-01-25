import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
      const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
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
      }

  return (
    <div>
      <Otsikko course={kurssi} />
      <Sisalto course={kurssi} /> 
      <Yhteensa course={kurssi} />
    </div>
  )
}

const Sisalto = (props) => {
    return(
        <div>
            <p> {props.course.osat[0].nimi} {props.course.osat[0].tehtavia} </p>
            <p> {props.course.osat[1].nimi} {props.course.osat[1].tehtavia} </p>
            <p> {props.course.osat[2].nimi} {props.course.osat[2].tehtavia} </p>
        </div>
    )
}

const Otsikko = (props) => {
    return(
        <h1> {props.course.nimi} </h1>
    )
}

const Yhteensa = (props) => {
    return(
        <p>yhteensä {props.course.osat[0].tehtavia + props.course.osat[1].tehtavia + props.course.osat[2].tehtavia} tehtävää</p>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)