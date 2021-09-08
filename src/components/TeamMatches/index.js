// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
// import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    newTeamDetailList: {},
  }

  componentDidMount() {
    this.getTeamDetail()
  }

  getTeamDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetail: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({newTeamDetailList: formattedData})
  }

  render() {
    const {newTeamDetailList} = this.state
    const {teamBannerUrl, latestMatchDetail, recentMatches} = newTeamDetailList

    return (
      <div className="team-container">
        <div className="inner-container">
          <img src={teamBannerUrl} alt="team banner" className="team-banner" />
          <h1 className="latest-matches">Latest Matches</h1>
          <LatestMatch latestMatchDetail={latestMatchDetail} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
