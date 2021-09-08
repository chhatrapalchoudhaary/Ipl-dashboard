// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetail} = props

  const updatedMatchDetails = {
    umpires: latestMatchDetail.umpires,
    result: latestMatchDetail.result,
    manOfTheMatch: latestMatchDetail.man_of_the_match,
    id: latestMatchDetail.id,
    date: latestMatchDetail.date,
    venue: latestMatchDetail.venue,
    competingTeam: latestMatchDetail.competing_team,
    competingTeamLogo: latestMatchDetail.competing_team_logo,
    firstInnings: latestMatchDetail.first_innings,
    secondInnings: latestMatchDetail.second_innings,
    matchStatus: latestMatchDetail.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = updatedMatchDetails

  return (
    <div className="match-detail-container">
      <div className="top-section">
        <div className="detail-section">
          <h1 className="team-name">{competingTeam}</h1>
          <p className="sub-detail">{date}</p>
          <p className="sub-detail">{venue}</p>
          <p className="sub-detail">{result}</p>
        </div>
        <div className="logo-section">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="competing-team-logo"
          />
        </div>
      </div>
      <hr />
      <div className="match-other-details">
        <p className="sub-detail-bold"> First Innings</p>
        <p className="sub-detail"> {firstInnings}</p>
        <p className="sub-detail-bold"> Second Innings</p>
        <p className="sub-detail"> {secondInnings}</p>
        <p className="sub-detail-bold"> Match Status</p>
        <p className="sub-detail"> {matchStatus}</p>
        <p className="sub-detail-bold"> Man Of The Match</p>
        <p className="sub-detail"> {manOfTheMatch}</p>
        <p className="sub-detail-bold"> Umpires</p>
        <p className="sub-detail"> {umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
