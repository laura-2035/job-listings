import React, { useContext, Component } from 'react'
import { useFilter } from '../providers/filter'

const Teste = () => {

    const { filter, setFilter } = useFilter()

    //Apparently is working as intended...
    const updateFilter = (param) => {

        const currentFilter = filter.current
        if (!currentFilter.includes(param)) {

            setFilter({
                current: [...filter.current, param]
            })

        }

    }
    //Must be called on updateFilter, review this later
    const renderButton = () => {
        console.log(filter)
        if (filter.current) {
            return filter.current.map((current) => {
                return <h1>Olá {current}</h1>
            })

        }

    }

    const removeFilter = (param) => {
        let newFilters = [...filter.current]
        if (newFilters.includes(param)) {
            const index = newFilters.indexOf(param)
            newFilters.splice(index, 1)
            setFilter({
                current: [...newFilters]
            })
             console.log('Removed '+ param)
        }
    }
    return (
        <div>
            <button onClick={() => { updateFilter('Javascript') }}>Add Java</button>
            <button onClick={() => { updateFilter('HTML') }}>Add HTML</button>
            <button onClick={() => { updateFilter('CSS') }}>Add CSS</button>
            <button onClick={() => { updateFilter('Node') }}>Add Node</button>
            <button onClick={() => { removeFilter('HTML') }}>Remove HTML</button>
            <button onClick={() => { removeFilter('Javascript') }}>Remove Javascript</button>
            {renderButton()}
        </div>
    )
}
export default Teste