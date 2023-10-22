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
    const val = event => {
      event.preventDefault()
      const res = {id: v4(), site1, webname1, pass1}
      if (site1 !== '' && webname1 !== '' && pass1 !== '') {
        onc(res)
      }
      this.setState(prev => ({site1: '', webname1: '', pass1: ''}))
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
            placeholder="Enter Username"
            value={webname1}
            onChange={this.webn1}
          />
        </div>
        <div className="al">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            height="50"
            className="img1"
          />
          <input
            className="inph"
            id="inpW"
            type="password"
            placeholder="Enter Password"
            value={pass1}
            onChange={this.pass1}
          />
        </div>
        <div>
          <div className="btn1">
            <button type="submit" className="btno">
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}
