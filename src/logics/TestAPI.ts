import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://kr.api.riotgames.com',
    headers: {
        "X-Riot-Token": "RGAPI-c1af79a5-6700-419e-93cf-163269647d90"
    }
})

export const getChallengers = async () => {
    const res = await baseUrl.get('/tft/league/v1/challenger');
    console.log(res)
    return res
  }