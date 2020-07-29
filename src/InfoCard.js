import React, {useState, useEffect} from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core'
import "./InfoCard.css";

function InfoCard(props) {

    const [info, setInfo] = useState({});

    useEffect(() => {
        const InfoById = async () =>{
            await fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${props.id}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "22dc1cf4e3msha6eee43c752a385p18c288jsnb80a65af1601"
                    }
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setInfo(data.drinks[0]);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        InfoById();
    },
    []
    )

    return (
        <div>
            <Card className="infoCard">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    className="infoCard__image" 
                    image={props.img_url} 
                    title={props.drink}/>
                    <CardContent className="infoCard__content">
                        <Typography className="infoCard__title" gutterBottom variant="h5" component="h3">
                            {props.drink}
                        </Typography>
                        <Typography className="infoCard__ingredients" variant="body2" color="textSecondary" component="h3">
                            Ingredients : {info.strIngredient1 !== null ? info.strIngredient1 : null },
                                            {" "}
                                        {info.strIngredient2 !== null ? info.strIngredient2 : null },
                                        {" "}
                                        {info.strIngredient3 !== null ? info.strIngredient3 : null },
                                        {" "}
                                        {info.strIngredient4 !== null ? info.strIngredient4 : null },
                        </Typography>
                        <Typography className="infoCard__glass" variant="body2" color="textSecondary" component="h3">
                            Glass Type : {info.strGlass}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default InfoCard 