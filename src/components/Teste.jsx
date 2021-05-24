import { useState } from 'react'
import JobData from '../data/data.json'


export default props =>{

    const [teste, setTesteState] = useState({
        testes: []
    })

    let aux = []
    const dataFromTeste = () =>{
        return JobData.map(jb =>{
            let obj = {jb}
            aux.push(obj)
            aux = {
                tags: 'teste'
            }
            console.log(aux)
            return <div>{aux.tags}</div>
        })
    }
   
    return (
        dataFromTeste()
    )


}