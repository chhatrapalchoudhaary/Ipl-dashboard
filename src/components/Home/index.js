// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamList: [],
  }

  componentDidMount() {
    this.getAllTeamNames()
  }

  getAllTeamNames = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamList: formattedData})
  }

  render() {
    const {teamList} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <div className="title-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>
          <div className="item-cards">
            {teamList.map(eachTeam => (
              <TeamCard iplList={eachTeam} key={eachTeam.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
