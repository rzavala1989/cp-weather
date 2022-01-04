import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';

export const WeatherCard = ({ data }) => {
  //pull props from data.location
  const {
    location: { name },
    region,
    localtime,
  } = data.location;
  const {
    weather_description,
    weather_icons,
    temperature,
    feelslike,
    precip,
    wind_speed,
    wind_dir,
  } = data.current;
  //pull props from data.current
  return (
    <Card>
      <CardHeader
        avatar={<Avatar />}
        title={name + ', ' + region}
        subheader={localtime}
      />
    </Card>
  );
};
