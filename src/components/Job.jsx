import React, { Component } from 'react'
import axios from 'axios'
import JobData from '../data/data.json'

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
         {console.log(arrayLangTools)}
        return (
            <div className="job-card">
                <div className="company-wrapper">
                    <p className="company-name">{job.company}</p>
                </div>
                <div className="job-info">
                    <h3>{job.position}</h3>
                    {renderNew()}
                    {renderFeatured()}
                </div>
                <div className="divider"></div>
                <div className="lang-tools">
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