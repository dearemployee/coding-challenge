import { getHeaders } from '../utils/get-headers';

const url = process.env.REACT_APP_CATS_API;
const imgUrl = process.env.REACT_APP_IMAGE_URL;

const handleError = async (response: Response) => {
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage.message);
  }
};

export const appRepository = {
  getCatTags: async () => {
    const getCatTagsResponse = await fetch(`${url}/tags`, {
      method: 'GET',
      headers: getHeaders(),
      mode: 'cors',
    });

    await handleError(getCatTagsResponse);
    return getCatTagsResponse.json();
  },

  getCats: async (query: string) => {
    const getCatsResponse = await fetch(
      `${url}/cats${query ? `${query}` : ''}`,
      {
        method: 'GET',
        headers: getHeaders(),
        mode: 'cors',
      }
    );

    await handleError(getCatsResponse);
    return getCatsResponse.json();
  },
  getRandomCat: async (query: string) => {
    const getRandomCatResponse = await fetch(
      `${imgUrl}${query ? `/${query}` : ''}?json=true`,
      {
        method: 'GET',
        headers: getHeaders(),
        mode: 'cors',
      }
    );

    await handleError(getRandomCatResponse);
    return getRandomCatResponse.json();
  },
};
