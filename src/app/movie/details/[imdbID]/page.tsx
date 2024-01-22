'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { MovieInterface } from '@/types/Movie';
import { fetchMovieData } from '@/utils/fetchMovieData';
import { OMDB_API_ID_PARAMETER } from '@/constants';
import logo from '@/../public/mini-netflix-logo.svg';
import styles from "./page.module.scss";

type MovieDetailsPageProps = {
  params: {
    imdbID: string;
  };
};

/**
 * Renders the movie details page.
 */
export default function MovieDetailsPage({ params: { imdbID } }: MovieDetailsPageProps) {
  const [movieData, setMovieData] = useState<MovieInterface | null>(null);

  useEffect(() => {
    if (imdbID) {
      fetchMovieData(OMDB_API_ID_PARAMETER, imdbID)
        .then(data => {
          setMovieData(data);
        })
        .catch(error => {
          console.error('Failed to fetch movie data:', error);
        });
    }
  }, [imdbID]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image src={logo} alt="Mini Netflix logo" />
      </header>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2>{movieData.Title}</h2>
          <p><b>Year: </b><time>{movieData.Year}</time></p>
          <p><b>Runtime: </b><time>{movieData.Runtime}</time></p>
          <p><b>Rated: </b>{movieData.Rated}</p>
          <p><b>imdb Rating: </b>{movieData.imdbRating}</p>
          <p><b>Director: </b>{movieData.Director}</p>
          <p><b>Cast: </b>{movieData.Actors}</p>
          <p><b>Plot: </b>{movieData.Plot}</p>
        </section>
        <figure>
          <Image src={movieData.Poster} alt={`${movieData.Title} movie poster`} width="300" height="450" />
        </figure>
      </div>
    </main>
  );
};