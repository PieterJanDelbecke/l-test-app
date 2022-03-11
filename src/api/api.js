import axios from "./axios";

const token = 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'

const getFilm = async (theater) => {
  try {
    const { status, data } = await axios.get(`/${theater}world/movies`, {
      headers: {
        'x-api-key' : token
      }
    });
    if (status === 200 || status === 201) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return error.response.data;
  }
};


export default { getFilm };
