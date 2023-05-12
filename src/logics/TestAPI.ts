import axios from "axios";

const apiKey = 'RGAPI-c1af79a5-6700-419e-93cf-163269647d90'
// const requestHeader = {

// }

const baseUrl = axios.create({
    baseURL: 'https://kr.api.riotgames.com',
    // headers : requestHeader
})

export const getChallengers = async () => {
    const res = await baseUrl.get(`/tft/league/v1/challenger?api_key=${apiKey}`);
    // console.log(res)
    // throw new Error('its my fails')
    return res.data
  }