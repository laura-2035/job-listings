import React, { useState } from 'react'
import '../scss/components/Filter.scss'
import { useFilter } from '../providers/filter'
import Button from './Button'
function Filter() {

    const { filters} = useFilter()
    const filterList = [...filters.current]
    
    const renderButtons = () =>{
        return filterList.map((current) =>{
            return <Button value={current}></Button>
        })
        
    }
    const renderFilters = () => {
        if (filterList.length > 0) {
            return (
                <div className="filters">
                    <div className="filters-wrapper">
                        {renderButtons()}         
                        {/* <div className="filter-block"><button className="filter">HTML</button><span className="remove-filter">x</span></div> */}
                    </div>
                    <button className="clear-button">Clear</button>
                </div>
            )
        }else{
            return <div></div>
        }
    }
    return(renderFilters())
        
}
export default Filter