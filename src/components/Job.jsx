import { useState } from 'react'
import JobData from '../data/data.json'
import { useFilter } from '../providers/filter'
import '../scss/components/Job.scss'
import Button from './Button'


const Job = () => {

	const { filters } = useFilter()

	const filterList = [...filters.current]
	const getJobs = () => {
		//Get jobs with filters
		const getJobsByFilter = () => {
			if (filterList.length === 0) {
				return JobData.map((job) => {
					//Adding tag to jobs objects
					Object.assign(job, {
						filters: [job.role, job.level, ...job.languages, ...job.tools]
					})

					return jobCardRender(job)
				})
			} else {
				return JobData.map((job) => {
					//Adding tag to jobs objects
					Object.assign(job, {
						filters: [job.role, job.level, ...job.languages, ...job.tools]
					})
					const jobHasFilters = filterList.every(fl => {
						return job.filters.includes(fl)
					})

					return jobHasFilters ? jobCardRender(job) : false
					
				})
			}
		}
		return (
			<div className="job-wrapper">
				{getJobsByFilter()}
			</div>
		)
	}

	const jobCardRender = (job) => {
		const renderNew = () => {
			if (job.new) {
				return <div className="job-tag new">New!</div>
			}
		}

		const renderFeaturedTag = () => {
			if (job.featured) {
				return <div className="job-tag featured">Featured</div>
			}
		}
		const renderFeaturedCard = () => {
			if (job.featured) {
				return <div className="featured-card"></div>
			}
		}
		const renderFilters = job.filters.map((filters) => {
			return <Button value={filters} op="add"></Button>
		})
		return (
			<div className="job-card">
				{renderFeaturedCard()}
				<div className="job-card-wrapper">
					<div className="company-logo">
						<img src={job.logo} alt={job.company}></img>
					</div>
					<div className="info">
						<div className="company-wrapper">
							<p className="company-name">{job.company}</p>
							{renderNew()}
							{renderFeaturedTag()}
						</div>
						<div className="job-info">
							<div className="title-wrapper">
								<h3 className="job-position">{job.position}</h3>
							</div>
							<div className="job-additional-info">
								<span><p>{job.postedAt}</p></span>
								<span><p>&bull;</p></span>
								<span><p>{job.contract}</p></span>
								<span><p>&bull;</p></span>
								<span><p>{job.location}</p></span>
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<div className="filter-tags">
						{renderFilters}
					</div>
				</div>

			</div>
		)
	}

	return (
		<div>
			{/* {getFiltersFromData()} */}
			{getJobs()}
		</div>

	)

}
export default Job