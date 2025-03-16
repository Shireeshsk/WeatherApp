import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import {useState} from 'react'
function SearchBox({updateinfo}){
    let [city,setCity] = useState("")
    let [error,setError] = useState(false)
    let api_url = "https://api.openweathermap.org/data/2.5/weather"
    let api_key = "a4ef0536fce1bf22a4a41f02e440777a"
    let getweatherinfo = async ()=>{
        try{
            let response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
            let jsonres = await response.json()
            console.log(jsonres);
            let result ={
                city:city,
                temp:jsonres.main.temp,
                tempMin:jsonres.main.temp_min,
                tempMax:jsonres.main.temp_max,
                humidity : jsonres.main.humidity,
                feelsLike: jsonres.main.feels_like,
                weather: jsonres.weather[0].description
            };
            console.log(result)
            setError(false)
            return result;
        }catch(err){
            setError(true)
            return null;
        }
    }
    function handlechange(event){
        setCity(event.target.value)
        setError(false)
    }

    async function handlesubmit(event){
        try{
            event.preventDefault();
            console.log(city);
            setCity("")
            let info = await getweatherinfo();
            updateinfo(info);
            setCity("")
        }catch(err){
            setError(true)
        }
    }
    return(
        <div className='searchbox'>
            <form >
                <TextField id="city" value={city} label="City Name" variant="outlined" onChange={handlechange} required/>
                <br /><br />
                <Button onClick={handlesubmit} variant="contained" type='submit' endIcon={<SendIcon />}>Send</Button>
                {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}

export default SearchBox;