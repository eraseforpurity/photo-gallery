import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import styles from "./Gallery.module.scss";
import { Home, ArrowLeft, ArrowRight } from "../../public/";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { nextPage, prevPage, firstPage } from "../../store/gallerySlice";

export const Gallery = () => {
  const dispatch = useAppDispatch();
  const imagesToDisplay = useAppSelector((state) => state.gallery.slicedImages);

  const title = useAppSelector((state) => state.gallery.title);
  const description = useAppSelector((state) => state.gallery.description);

  const currentImages = imagesToDisplay.map((el, index) => (
    <div key={index} className={styles.imageWrapper}>
      <Image layout="fill" src={el.src} objectFit="cover" />
    </div>
  ));

  const handleNextClick = () => {
    dispatch(nextPage());
  };

  const handlePrevClick = () => {
    dispatch(prevPage());
  };

  const handleHomeClick = () => {
    dispatch(firstPage());
  };

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>{description}</p>

      <div className={styles.gallery}>{currentImages}</div>

      <div className={styles.controls}>
        <Button onClick={handlePrevClick}>
          <ArrowLeft />
        </Button>

        <Button onClick={handleHomeClick}>
          <Home />
        </Button>

        <Button onClick={handleNextClick}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
