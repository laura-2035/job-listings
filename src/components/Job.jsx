import React, { Component } from 'react'
import JobData from '../data/data.json'
import { useFilter } from '../providers/filter'
import '../scss/components/Job.scss'
import Button from './Button'

const Job = () => {
	let arrayLangTools = new Set()
	const { filter, setFilter } = useFilter()

	const getFiltersFromData = () => {
		return (
			JobData.map(({ position, role, languages, tools }) => {
				arrayLangTools.add(position)
				arrayLangTools.add(role)
				arrayLangTools.add(languages)
				arrayLangTools.add(tools)
				return arrayLangTools
			})
		)
	}
	const getJobs = () => {
		return (
			<div className="job-wrapper">
				{JobData.map((job) => {
					return jobCardRender(job)
				})}
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


		const renderLanguages = job.languages.map((lang) => {
			//Obtaining the languages
			// arrayLangTools = !arrayLangTools.includes() ? arrayLangTools.push(lang) : ''
			return <Button value={lang} op="add"></Button>
		})
		const renderTools = job.tools.map((tools) => {
			//Obtaining the tools
			// arrayLangTools = !arrayLangTools.includes() ? arrayLangTools.push(tools) : ''
			return <Button value={tools} op="add"></Button>
		})

		return (

			<div className="job-card">
				
				{renderFeaturedCard()}
				<div className="job-card-wrapper">
					<div className="company-logo">
						<img src={job.logo}></img>
					</div>
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
					<div className="divider"></div>
					<div className="filter-tags">
						<Button value={job.role} op="add"></Button>
						<Button value={job.level} op="add"></Button>
						{renderLanguages}
						{renderTools}
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