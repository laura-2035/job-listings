import Filter from '../components/Filter'
import Job from '../components/Job'
import backgroundImage from '../images/bg-header-mobile.svg'
export default props =>{
    return(
        <div className="container">
            <div className="top-bg">
                <img src={backgroundImage}></img>
            </div>
            <main>
                <Filter></Filter> 
                <Job></Job>
            </main>
        </div>
    )
}