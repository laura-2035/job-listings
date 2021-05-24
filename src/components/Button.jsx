import '../scss/components/Button.scss'
import {useFilter} from '../providers/filter'


function Button (props){

    const { filters, setFilter } = useFilter()
    
    const addFilter = (param) =>{
        const currentFilter = filters.current
        if (!currentFilter.includes(param)) {
            setFilter({
                current: [...filters.current, param]
            })
        }
	}
    const removeFilter = (param) => {
        let newFilters = [...filters.current]
        if (newFilters.includes(param)) {
            const index = newFilters.indexOf(param)
            newFilters.splice(index, 1)
            setFilter({
                current: [...newFilters]
            })
        }
    }

    const removeAll = () =>{
        
        setFilter({
            current: []
        })
    }


    if(props.op === 'add'){
        return <button className="filter" onClick={() => addFilter(props.value)}>{props.value}</button>
    }else if(props.op === 'clear'){
        return <button className="clear-button" onClick={() => removeAll()}>Clear</button>
    }
    else{
        return <div className="filter-block"><button className="filter" >{props.value}</button><span className="remove-filter" onClick={() => removeFilter(props.value)}>x</span></div>

    }
    
}
export default Button