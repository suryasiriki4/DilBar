import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core'
import "./InfoCard.css";

function InfoCard(props) {
    return (
        <div>
            <Card className="infoCard">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    className="infoCard__image" 
                    image={props.img_url} 
                    title="imageOfDrink"/>
                    <CardContent>
                        <Typography className="infoCard__title" gutterBottom variant="h5" component="h2">
                            {props.drink}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default InfoCard 