import React, { Component } from 'react'
import axios from 'axios'
import JobData from '../data/data.json'
import '../scss/components/Job.scss'


//Variable to store all languages and tools
let arrayLangTools = []

export default class Job extends Component{

    constructor(props){
        super(props)
        this.state = {
            items: []
        }   
    }
    
    getJobs(){
        return(
            <div className="job-wrapper">
                {JobData.map((job)=>{
                    
                    return this.jobCardRender(job)
                })}
                
            </div>
        )
    }
    jobCardRender(job){
        

        const renderNew = () => {
            if(job.new){
                return <span className="job-tag new">New</span>
            }
        }

        const renderFeatured = () =>{
            if(job.featured){
                return <span className="job-tag featured">Featured</span>
            }
        }
        const renderLanguages = job.languages.map((lang)=>{
            //Obtaining the languages
            this.arrayLangTools = !arrayLangTools.includes() ? arrayLangTools.push(lang) : ''
            return <button className="job-lang-tool">{lang}</button> 
         })
        const renderTools = job.tools.map((tools)=>{ 
            //Obtaining the tools
            this.arrayLangTools = !arrayLangTools.includes() ? arrayLangTools.push(tools) : ''
            return <button className="job-lang-tool">{tools}</button>
         })
       
        return (
            <div className="job-card">
                <div className="company-logo">
                    <img src={job.logo}></img>
                </div>
                <div className="company-wrapper">
                    <p className="company-name">{job.company}</p>
                    {renderNew()}
                    {renderFeatured()}
                </div>
                <div className="job-info">
                    <div className="title-wrapper">
                        <h3 className="job-position">{job.position}</h3>
                        
                    </div>
                    <div className="job-additional-info">
                        <span><p>{job.postedAt}</p></span>
                        <span><p>{job.contract}</p></span>
                        <span><p>{job.location}</p></span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="filter-tags">
                <button className="job-lang-tool">{job.role}</button> 
                <button className="job-lang-tool">{job.level}</button> 
                    {renderLanguages}
                    {renderTools}
                </div>
            </div>
        )
    }
    render(){
        return (
            this.getJobs()
        )
    }
}