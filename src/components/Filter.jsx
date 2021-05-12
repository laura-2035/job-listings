import React, { Component } from 'react'

//Intial state
const instialState = {
    filters: []
}

export default class Filter extends Component{
    
    render(){
        return (
            <div className="filters">
                <div className="filters-wrapper">
                </div>
                <button className="clear">Clear</button>
            </div>
            )
    }
}