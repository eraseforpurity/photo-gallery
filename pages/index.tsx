import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Gallery } from "../components/Gallery";
import { EditGallery } from "../components/EditGallery";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <EditGallery />

        <Gallery />
      </main>
    </div>
  );
};

export default Home;
