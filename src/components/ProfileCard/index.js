import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProfileCard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    userDetails: [],
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // const fetchedData = await response.json()
    // console.log(fetchedData)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(fetchedData)

      const profileDetails = {
        name: fetchedData.profile_details.name,
        profileImageUrl: fetchedData.profile_details.profile_image_url,
        shortBio: fetchedData.profile_details.short_bio,
      }

      this.setState({
        userDetails: profileDetails,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderSuccessView = () => {
    const {userDetails} = this.state
    const {name, profileImageUrl, shortBio} = userDetails

    return (
      <div className="profile-card-container">
        <img src={profileImageUrl} className="image-edit" alt="avatar" />
        <h1 className="profile-user-name">{name}</h1>
        <p className="profile-user-description">{shortBio}</p>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getProfileDetails()
  }

  renderFailureView = () => (
    <div className="Retry-button">
      <button className="retry-button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderProfileCard = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      // return null
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderProfileCard()}</div>
  }
}

export default ProfileCard
