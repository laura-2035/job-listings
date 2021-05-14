import React, { Component } from 'react'
import '../scss/components/Filter.scss'
//Intial state
const instialState = {
    filters: []
}

export default class Filter extends Component{
    
    render(){
        return (
            <div className="filters">
                <div className="filters-wrapper">
                    <div className="filter-block"><button className="filter">Javascript</button><span className="remove-filter">x</span></div>
                    <div className="filter-block"><button className="filter">CSS</button><span className="remove-filter">x</span></div>
                    <div className="filter-block"><button className="filter">HTML</button><span className="remove-filter">x</span></div>
                    
                </div>
                <button className="clear-button">Clear</button>
            </div>
            )
    }
}