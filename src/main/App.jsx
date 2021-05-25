import Filter from '../components/Filter'
import Job from '../components/Job'
import {FilterProvider} from '../providers/filter'
function App(){
    
    return(
        <FilterProvider>
        {/* <Teste></Teste> */}
        <div className="container">
            <div className="top-bg">
            </div>
            <main>
                <Filter></Filter> 
                <Job></Job>
            </main>
        </div>
        </FilterProvider>
    )
}
export default App