import axios from 'axios';
const TOKEN = '32417396-5b16c4c00fd3d3c2a99983bbd';
const BASE_URL = 'https://pixabay.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: TOKEN,
    per_page: 40,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export async function getData(valueInput, page) {
  try {
    const { data } = await api.get(``, {
      params: { page: page, q: valueInput },
    });
   

    
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
