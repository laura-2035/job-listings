import '../scss/components/Button.scss'
import {useFilter} from '../providers/filter'


export default (props, op) => {

    const { filter, setFilter } = useFilter()
    
    if(op === 'add'){
        return <button className="filter" >{props.value}</button>
    }else{
        return <button className="filter" >{props.value}</button>
    }
    
}