import React, { Component } from 'react'
import JobData from '../data/data.json'
import '../scss/components/Job.scss'


//Variable to store all languages and tools
let arrayLangTools = []

export default class Job extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         intial: ['Oi', 'watashi wa josé desu'],
    //         current: []
    //     }   
    // }
    
    getJobs(){
        return(
            <div className="job-wrapper">
                {JobData.map((job)=>{
                    
                    return this.jobCardRender(job)
                })}
                
            </div>
        )
    }
    // updateState(param){
    //     //Checking if the filter is already in the list
    //     if(!this.state.current.includes(param)){
    //         this.setState(prevState => ({
    //             current: [...prevState.current, param] 
    //         }))
    //     }
    //     console.log(this.state)
    // }
    jobCardRender(job){
        

        const renderNew = () => {
            if(job.new){
                return <div className="job-tag new">New!</div>
            }
        }
        
        const renderFeaturedTag = () => {
            if(job.featured){
                return <div className="job-tag featured">Featured</div>
            }
        }
        const renderFeaturedCard = () => {
            if(job.featured){
                return <div className="featured-card"></div>
            }
        }
        
       
        const renderLanguages = job.languages.map((lang)=>{
            //Obtaining the languages
            this.arrayLangTools = !arrayLangTools.includes() ? arrayLangTools.push(lang) : ''
            return <button className="filter">{lang}</button> 
         })
        const renderTools = job.tools.map((tools)=>{ 
            //Obtaining the tools
            this.arrayLangTools = !arrayLangTools.includes() ? arrayLangTools.push(tools) : ''
            return <button className="filter">{tools}</button>
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
                    <button className="filter" >{job.role}</button> 
                    <button className="filter" >{job.level}</button> 
                    {renderLanguages}
                    {renderTools}
                </div>
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