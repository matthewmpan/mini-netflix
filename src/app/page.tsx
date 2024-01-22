'use client'

import { useState, useEffect} from "react";
import Billboard from "@/components/Billboard/Billboard";
import Category from "@/components/Category/Category";
import styles from "./page.module.scss";
import fetchCategoryData from "@/utils/fetchCategoryData";

export default function Home() {

  //queries is an array of strings that represent the category names to display movies on the home page
  const [queries, setQueries] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = fetchCategoryData();
      setQueries(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Billboard />
      <main className={styles.main}>
        <div className={styles.grid}>
          <section>
            {queries.map(query => <Category key={query} query={query}/>)}
          </section>
        </div>
      </main>
    </>
  );
}