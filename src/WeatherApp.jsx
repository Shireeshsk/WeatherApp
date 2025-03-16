import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import {useState} from 'react'
export default function WeatherApp(){
    let [info , setInfo] = useState(null)

    let updateInfo = (res)=>{
        setInfo(res);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>SkyCast</h2>
            <SearchBox updateinfo={updateInfo}/>
            {info && <InfoBox info={info} />}
        </div>
    )
}