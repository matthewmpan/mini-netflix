'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef} from "react";
import { fetchMovieData } from "../../utils/fetchMovieData";
import { MovieInterface } from "@/types";
import { OMDB_API_SEARCH_PARAMETER } from '@/constants';
import styles from "./Category.module.scss";

interface CategoryProps {
  query: string;
}

/**
 * Renders a category component that displays a list of movies based on a query.
 */
export default function Category({ query }: CategoryProps) {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Ref to the scroll container element.
  const scrollContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieData(OMDB_API_SEARCH_PARAMETER, query);
        
        setMovies(data.Search);
        setIsLoading(false);

      } catch (error) {
        console.error('An error occurred while fetching the data.', error);
      }
    };

    fetchData();
  }, [query]);

  // This useEffect handles mouseover events to scroll the category container horizontally.
  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleMouseOver = (event: MouseEvent) => {
      const rect = scrollContainerRef.current?.getBoundingClientRect();
      const x = event.clientX - (rect?.left || 0); // x position within the element
      // Calculates the scroll speed based on the mouse position within the scroll container.
      const scrollSpeed = rect ? (x - rect.width / 2) / (rect.width / 2) : 0;
  
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
  
      animationFrameId = requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += scrollSpeed * 15; // adjust to control the scroll speed
        }
      });
    };
  
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('mousemove', handleMouseOver as EventListener);
  
      // Clean up event listener and animation frame on unmount
      return () => {
        scrollContainer.removeEventListener('mousemove', handleMouseOver as EventListener);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [movies]);

    return(
      <div className={styles.category}>
        { isLoading ? (
          // Render Loading... when movies array is not populated
          <div>Loading...</div>
        ) : (
          <>
            <h2 className={styles.movieCategory}>{query}</h2>
            <ul className={styles.moviesList} ref={scrollContainerRef}>
              {/* Render movie cards when movies array is populated */}
              {movies.map((movie: MovieInterface) => (
                <li key={movie.imdbID} className={styles.card}>
                  <Link href={`/movie/details/${movie.imdbID}`}>
                    <Image
                      src={movie.Poster}
                      alt={`${movie.Title} movie poster`}
                      width={300}
                      height={450} />
                    <div className="movie-title">{movie.Title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
}