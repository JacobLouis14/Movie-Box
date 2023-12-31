import { API_KEY, BASE_URL } from './Constants/constants';

export const originals = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_networks=213`  ///discover/tv
export const action = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romantic = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentries = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`

export const languages = `${BASE_URL}/configuration/languages?api_key=${API_KEY}`
