
export const USER_AVATAR="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const Play_Icon='https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png';

export const IMG_URL="http://image.tmdb.org/t/p/w500" 

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const GEMINI_API=process.env.REACT_APP_GEMINI_API

export const supportedLanguages=[
  {identifier:"en",name:"English"},
  {identifier:"hi",name:"Hindi"},
  {identifier:"jp",name:"Japanese"},
  {identifier:"sp",name:"Spanish"}
]

