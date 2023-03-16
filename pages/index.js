import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { supabase } from "@/utils/supabase";

export default function Home({ campuses }) {
  console.log(campuses);
  return (
    <>
      <Head></Head>
      <div>
        <h1 className={styles.title}>Exploring Next.js</h1>
        <div>
          <h1>About</h1>
          <p className={styles.text}>blah blah blah</p>
          <p className={styles.text}>blah blah blah</p>
        </div>
      </div>
    </>
  );
}
