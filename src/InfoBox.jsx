import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
export default function InfoBox({info}){
    let imgadd = "https://plus.unsplash.com/premium_photo-1673081112888-f877c594ad18?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D"
    
    let hot = "https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let cold = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let rain = "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    return(
        <div className="infobox">
            <div className ='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80 ? rain : info.temp>27? hot : cold}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}     {info.temp>27 ? <WbSunnyIcon /> : info.humidity>80 ? <ThunderstormIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Minimum Temperature = {info.tempMin}&deg;C </p>
                            <p>Maximum Temperature = {info.tempMax}&deg;C </p>
                            <p>Humidity = {info.humidity} </p>
                            <p>The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}