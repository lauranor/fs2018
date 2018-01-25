import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }

  return (
    <div>
      <Otsikko name={kurssi} />
      <Sisalto num={osa1.nimi} teht={osa1.tehtavia} />
      <Sisalto num={osa2.nimi} teht={osa2.tehtavia} />
      <Sisalto num={osa3.nimi} teht={osa3.tehtavia} />
      <Yhteensa count={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
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