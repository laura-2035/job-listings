import Filter from '../components/Filter'
import Job from '../components/Job'
import backgroundImage from '../images/bg-header-mobile.svg'
import {FilterProvider} from '../providers/filter'
import Teste from '../components/Teste'
function App(){
    
    return(
        <FilterProvider>
        {/* <Teste></Teste> */}
        <div className="container">
            <div className="top-bg">
                {/* <img src={backgroundImage}></img> */}
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