import {GoLocation, GoBriefcase} from 'react-icons/go'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const JobsList = props => {
  const renderJobListItems = () => {
    const {jobData} = props
    const {
      companyLogoUrl,
      employmentType,
      id,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobData

    return (
      <>
        <li className="each-job-card">
          <div className="main-container">
            <div className="image-company-name-container">
              <div className="company-logo">
                <img
                  src={companyLogoUrl}
                  alt="company logo"
                  className="logo-edit"
                />
              </div>
              <div className="job-role-rating-container">
                <h1 className="job-role">{title}</h1>
                <p className="job-rating">
                  <BsFillStarFill className="star-rating" />
                  {rating}
                </p>
              </div>
            </div>
            <div className="location-salary-container">
              <div className="location-container">
                <GoLocation className="location-icon-edit" />
                <p className="location-name">{location}</p>
                <GoBriefcase className="location-icon-edit" />
                <p className="location-name">{employmentType}</p>
              </div>
              <div className="salary-container">
                <p className="salary">{packagePerAnnum}</p>
              </div>
            </div>
            <hr className="line" />
            <div className="description-container">
              <h1 className="description-heading">Description</h1>
              <p className="description-para">{jobDescription}</p>
            </div>
          </div>
        </li>
      </>
    )
  }

  return <>{renderJobListItems()}</>
}

export default JobsList
