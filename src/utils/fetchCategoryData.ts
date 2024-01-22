import queriesData from '../data/queries.json';

/**
 * Fetches category data.
 * This function currently reads the category data from a local JSON file instead of making an actual API call.
 * @returns {string[]} The category data as an array of query strings.
 * @throws {Error} If there is an error fetching the category data.
 */

export default function fetchCategoryData(): string[] {
  try {
    return queriesData;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return [];
  }
}
