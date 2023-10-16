import './style.css'

const Res = props => {
  const {a, sh, del1} = props
  console.log(del1)
  const {webname1, site1, pass1, id} = a
  const trig = () => {
    del1(id)
  }
  return (
    <li className="yur">
      <div className="strict">
        <div className="str ">
          <h1>{webname1[0].toUpperCase()}</h1>
        </div>
        <div className="con">
          <p>{webname1}</p>
          <p>{site1}</p>
          {sh ? (
            <p>{pass1}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              width="50"
            />
          )}
        </div>
        <div>
          <button data-testid="delete" onClick={trig} className="btsy">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default Res
