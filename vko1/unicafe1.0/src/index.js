import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        hyvä: 0,
        neutraali: 0,
        huono: 0,
        keskiarvo: 0
    }
  }

  lisaaHyva = (arvo) => {
    return () => {
      this.setState({ hyvä: arvo })
    }
  }
  lisaaNeutr = (arvo) => {
    return () => {
      this.setState({ neutraali: arvo })
    }
  }
  lisaaHuono = (arvo) => {
    return () => {
      this.setState({ huono: arvo })
    }
  }

  laskeKeskiarvo = () => {
      return () => {
          this.setState({ keskiarvo: this.state.hyvä })
      }
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <div>
          <button onClick={this.lisaaHyva(this.state.hyvä + 1)}>
            hyvä
          </button>
          <button onClick={this.lisaaNeutr(this.state.neutraali + 1)}>
            neutraali
          </button>
          <button onClick={this.lisaaHuono(this.state.huono + 1)}>
            huono
          </button>
        </div>
        <h2>statistiikka</h2>
        <div>hyvä {this.state.hyvä}</div>
        <div>neutraali {this.state.neutraali}</div>
        <div>huono {this.state.huono}</div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))