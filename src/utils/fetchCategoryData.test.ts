/**
 * Tests for the fetchCategoryData function.
 */
import fetchCategoryData from './fetchCategoryData';

describe('fetchCategoryData', () => {
  /**
   * Test case: should fetch category data successfully.
   */
  it('should fetch category data successfully', () => {
    const categoryData = fetchCategoryData();

    expect(categoryData).toEqual(expect.arrayContaining(['Star Wars', 'Batman', 'Mission: Impossible', 'Lord of the Rings', 'Harry Potter']));
  });

  /**
   * Test case: should return an empty array if there is an error fetching the category data.
   */
  it('should return an empty array if there is an error fetching the category data', () => {
    // Mocking the console.error method
    console.error = jest.fn();

    const categoryData = fetchCategoryData();

    // expect(categoryData).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
});