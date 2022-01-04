import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { WeatherInput } from './WeatherInput';

export const Weather = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');

  const API_KEY = '25afe19fe6348fd55b785d9185d94e2f';
  const BASE_URL = 'http://api.weatherstack.com/current';

  return (
    <Container>
      <WeatherInput
        data={data}
        setData={setData}
        apiKey={API_KEY}
        baseUrl={BASE_URL}
        query={query}
        setQuery={setQuery}
      />
    </Container>
  );
};
