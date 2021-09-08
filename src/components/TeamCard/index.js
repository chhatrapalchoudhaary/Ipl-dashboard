// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplList} = props
  const {id, name, imageUrl} = iplList

  return (
    <div className="card">
      <Link to={`/team-matches/${id}`} className="item-link">
        <div className="team-block">
          <img src={imageUrl} alt={name} className="team-logo" />
          <h1 className="card-title">{name}</h1>
        </div>
      </Link>
    </div>
  )
}
export default TeamCard
