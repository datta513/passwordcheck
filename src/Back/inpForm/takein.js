import {Component} from 'react'
import {v4} from 'uuid'
import './Align.css'

export default class Inp extends Component {
  state = {site1: '', webname1: '', pass1: ''}

  stu1 = event => {
    this.setState(prev => ({
      site1: event.target.value,
    }))
  }

  webn1 = event => {
    this.setState(prev => ({
      webname1: event.target.value,
    }))
  }

  pass1 = event => {
    this.setState(prev => ({
      pass1: event.target.value,
    }))
  }

  render() {
    const {onc} = this.props
    const {site1, webname1, pass1} = this.state
    let site = ''
    let webname = ''
    let passc = ''
    const val = event => {
      event.preventDefault()
      const res = {id: v4(), site1, webname1, pass1}
      onc(res)
    }

    const stu = event => {
      site = site + event.target.value
    }

    const webn = event => {
      webname = webname + event.target.value
    }

    const pass2 = event => {
      passc = passc + event.target.value
    }

    return (
      <form onSubmit={val} id="submit">
        <div className="al">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            height="50"
            className="img1"
          />
          <input
            className="inph"
            type="text"
            id="inpW"
            placeholder="Enter Website"
            value={site1}
            onChange={this.stu1}
          />
        </div>
        <div className="al">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            height="50"
            className="img1"
          />
          <input
            className="inph"
            type="text"
            id="inpW"
            placeholder="Enter Website"
            value={webname1}
            onChange={this.webn1}
          />
        </div>
        <div className="al">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="website"
            height="50"
            className="img1"
          />
          <input
            className="inph"
            id="inpW"
            type="password"
            placeholder="Enter Website"
            value={pass1}
            onChange={this.pass1}
          />
        </div>
        <div className="btn1">
          <button type="submit" className="btno">
            enter
          </button>
        </div>
      </form>
    )
  }
}
