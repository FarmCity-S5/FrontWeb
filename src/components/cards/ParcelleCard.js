import React from 'react';
import {Card,CardMedia,CardContent} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './parcellecard.css';

export default function ParcelleCard(props){

  const { images,description,nbParcelle,longitude,latitude } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    
    <Card className="parcelle-card">
      <CardMedia>
        
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt=""/>
            </div>
          ))}
        </Slider>

      </CardMedia>

      <CardContent>
        <div className="parcelle-card__description">
            {description}
        </div>
        <div className="parcelle-card__parcelle">
            {nbParcelle} parcelles
        </div>
        <div className="parcelle-card__localisation">
            {longitude} ; {latitude}
        </div>
      </CardContent>
    </Card>

  );
}