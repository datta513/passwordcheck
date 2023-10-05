import {Component} from 'react'
import v4 from 'uuid'
import Inp from '../inpForm/takein'
import Res from '../ExciFrom/outputform'
import './Inform.css'

export default class Flap extends Component {
  state = {clis: [], show: false, st: ''}

  tog = () => {
    const {show} = this.state
    this.setState(prev => ({show: !prev.show}))
  }

  sta = res => {
    this.setState(prev => ({clis: [...prev.clis, res]}))
  }

  curr = event => {
    this.setState(prev => ({
      st: event.target.value,
    }))
  }

  del = id => {
    const {clis} = this.state
    const temp = clis.filter(each => each.id !== id)
    this.setState(prev => ({clis: [...temp]}))
  }

  render() {
    const {clis, show, st} = this.state
    const temp = st.toLowerCase()
    const temlis = clis.filter(each => each.webname1.includes(temp))
    return (
      <div className="back">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            width="150px"
            className="logo"
          />
        </div>
        <div className="Formin">
          <div className="formin1">
            <h1>Add New Password</h1>
            <Inp onc={this.sta} />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              className="secim"
              alt="password manager"
            />
          </div>
        </div>
        <div className="adj">
          <div className="hed">
            <h1>Your Passwords</h1>
            <div className="ser">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="imgstyle"
                alt="search"
              />
              <input type="search" className="inpstyle" onChange={this.curr} />
            </div>
          </div>
          <div className="hed">
            <div className="sdr">
              <p>your passwords </p>
              <p>{temlis.length}</p>
            </div>
            <div>
              <input type="checkbox" onClick={this.tog} id="check" />
              <label htmlFor="check">Show Passwords</label>
            </div>
          </div>
          {temlis.length > 0 ? (
            <ul className="dispstyle">
              {temlis.map(each => (
                <Res a={each} key={each.id} sh={show} del1={this.del} />
              ))}
            </ul>
          ) : (
            <div className="image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                height="250px"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
