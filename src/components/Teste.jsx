import React, {useContext, Component} from 'react'
import {useFilter} from '../providers/filter'

const Teste = () => {

    const {filter, setFilter} = useFilter()

    //Apparently is working as intended...
    const updateFilter = (param) => {
        const currentFilter = filter.current
        if(!currentFilter.includes(param)){
            
            setFilter({
                current: [...filter.current, param]
            })
            
        }
        console.log(filter.current)
    }
    //Must be called on updateFilter, review this later
    const renderButton = () =>{
        if(filter.current){
            return filter.current.map((current)=>{
                console.log('Current map ', current)
                return <h1>Olá {current}</h1>
            })

        }
    }

    const removeFilter = (param) =>{
        const newFilters = [...filter.current]
        console.log('New filters '+ newFilters)
        newFilters.splice(2, 1)
        setFilter({
            current: [newFilters]
        })
        // console.log('New filters '+newFilters.current)
        
    }
    return (
        <div>
            <button onClick={() => {updateFilter('Javascript')}}>Add Java</button>
            <button onClick={() => {updateFilter('HTML')}}>Add HTML</button>
            <button onClick={() => {updateFilter('CSS')}}>Add CSS</button>
            <button onClick={() => {updateFilter('Node')}}>Add Node</button>
            <button onClick={() => {removeFilter('HTML')}}>Remove HTML</button>
            <button onClick={() => {removeFilter('Javascript')}}>Remove Javascript</button>
            {renderButton()}
        </div>
    )
}
export default Teste