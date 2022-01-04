import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { WeatherCard } from './WeatherCard';

const useStyles = makeStyles((theme) => ({
  formSpacing: {
    margin: '20px',
  },
}));

export const WeatherInput = ({
  query,
  setQuery,
  data,
  setData,
  apiKey,
  baseUrl,
}) => {
  //bring in our useStyles
  const classes = useStyles();

  let weatherData;

  let handleChange = (e) => {
    setQuery(e.target.value);
  };
  let passData = (e) => {
    e.preventDefault();
    //make an api call (or at least call the function thats does so)
    apiCall();
    //set our query state back to an empty string
    setQuery('');
  };

  let apiCall = async () => {
    //take our json data from our fetch
    try {
      let response = await fetch(
        `${baseUrl}?access_key=${apiKey}&query=${query}&units=f`
      );
      //make our our json data readable for our react app
      weatherData = await response.json();
      //setting our weather data we get back so we can show it on the card
      console.log('weatherdata object::::', weatherData);
      setData(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={classes.formSpacing} onSubmit={passData}>
        <TextField
          label='enter a city'
          value={query}
          id='input-with-sx'
          variant='standard'
          onChange={handleChange}
        />
        <Button type='submit' variant='contained' color='primary'>
          Get Weather
        </Button>
      </form>
      <br />
      <br />
      <br />

      {data?.location ? (
        <WeatherCard data={weatherData} />
      ) : (
        <h1>No data found for this city</h1>
      )}
    </>
  );
};
