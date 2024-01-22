import { OMDB_API_KEY } from '@/constants';
import { MovieInterface, MovieNotFoundInterface } from '@/types';

/**
 * Fetches movie data from the OMDB API based on the provided parameter and query.
 * @param parameter - The parameter to search for (e.g., "t" for title, "i" for IMDbID).
 *                    For more information on available parameters, see the [OMDB API documentation](https://www.omdbapi.com).
 * @param query - The value to search for based on the parameter.
 * @returns A Promise that resolves to the fetched movie data.
 * @throws If an error occurs while fetching the movie data.
 */

export async function fetchMovieData(parameter: string, query: string): Promise<any> {
  const URL = `https://www.omdbapi.com/?apiKey=${OMDB_API_KEY}`;

  try {
    const response = await fetch(`${URL}&${parameter}=${query}`);
    const data: MovieInterface | MovieNotFoundInterface = await response.json();
    if ('Error' in data) {
      throw new Error(`HTTP error! status: ${data.Error}`);
    }
    return data;
  } catch (error) {
    console.error('An error occurred while fetching the data.', error);
    throw error;
  }
}