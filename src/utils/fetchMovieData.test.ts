/**
 * Tests for the fetchMovieData function.
 */
import { fetchMovieData } from './fetchMovieData';

describe('fetchMovieData', () => {
  
  /**
   * Test case: should fetch movie data based on the provided parameter and query.
   */
  it('should fetch movie data based on the provided parameter and query', async () => {
    const parameter = 'i';
    const query = 'tt1877830';

    const movieData = await fetchMovieData(parameter, query);

    expect(movieData.Title).toBe('The Batman');
    expect(movieData.Year).toBe('2022');
    expect(movieData.imdbID).toBe('tt1877830');
  });

  /**
   * Test case: should throw an error if an error occurs while fetching the movie data.
   */
  it('should throw an error if an error occurs while fetching the movie data', async () => {
    const parameter = 't';
    const query = 'Invalid Movie Title';

    await expect(fetchMovieData(parameter, query)).rejects.toThrow();
  });
});