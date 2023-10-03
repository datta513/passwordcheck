import {Component} from 'react'
import v4 from 'uuid'
import Inp from '../inpForm/takein'
import './Inform.css'

export default class Flap extends Component {
  state = {clis: []}

  sta = res => {
    this.setState(prev => ({clis: [...prev.clis, res]}))
  }

  render() {
    const {clis} = this.state
    console.log(clis)
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

        <div className="">
          <h1>Yourpassword</h1>
          <input type="checkbox" onClick={this.tog} />
        </div>
      </div>
    )
  }
}
