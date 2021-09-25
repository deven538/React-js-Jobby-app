import ProfileCard from '../ProfileCard'
import './index.css'

const FilterGroup = props => {
  const renderTypeOfListItems = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(category => {
      const {employmentTypeId, label} = employmentTypesList

      return (
        <li className="list-item" key={category.employmentTypeId}>
          <input
            type="checkbox"
            id={category.employmentTypeId}
            name={category.employmentTypeId}
            className="check-box-edit"
          />
          <label htmlFor={category.employmentTypeId} className="label-name">
            {category.label}
          </label>
          <br />
        </li>
      )
    })
  }

  const renderTypeOfEmployment = () => (
    <div className="type-of-employment-section">
      <hr />
      <h1 className="type-of-employment-heading">Type of Employment</h1>
      <ul className="type-of-employment-list">{renderTypeOfListItems()}</ul>
    </div>
  )

  const renderSalaries = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(category => {
      const {salaryRangeId, label} = salaryRangesList

      return (
        <li className="list-item" key={category.salaryRangeId}>
          <input
            type="radio"
            id={category.salaryRangeId}
            name="salary"
            className="check-box-edit"
          />
          <label htmlFor={category.salaryRangeId} className="label-name">
            {category.label}
          </label>
          <br />
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-range-section">
      <hr />
      <h1 className="type-of-employment-heading">Salary Range</h1>
      <ul className="type-of-employment-list">{renderSalaries()}</ul>
    </div>
  )

  return (
    <div className="profile-section-container">
      <ProfileCard />
      {renderTypeOfEmployment()}
      {renderSalaryRange()}
    </div>
  )
}

export default FilterGroup
