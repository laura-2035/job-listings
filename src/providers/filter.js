import React, {useState} from 'react'

//Creating context
export const FilterContext = React.createContext({})

//Creating the provider and setting their initial values
export const FilterProvider = (props) =>{
    const [filters, setFilter] = useState({
        current: [],
    })

    return (
        <FilterContext.Provider value={{filters, setFilter}}>
            {props.children}
        </FilterContext.Provider>
    )
}
//Creating a customized hook
export const useFilter = () => React.useContext(FilterContext)
