import React from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "009ba4afb61dbcf88e23231d6d63a206";

export const Fetch = async (query) => {
    const { data } = await axios.get(URL ,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
}