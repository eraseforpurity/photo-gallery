import React from "react";
import styles from "./EditGallery.module.scss";
import { DropZone } from "../DropZone";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {
  onTitleChange,
  onDescChange,
  onDeleteAllPhotos,
  onUploadPhoto,
} from "../../store/gallerySlice";

export const EditGallery = () => {
  const title = useAppSelector((state) => state.gallery.title);
  const description = useAppSelector((state) => state.gallery.description);

  const dispatch = useAppDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(onTitleChange(value));
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    dispatch(onDescChange(value));
  };

  const handleDeletePhotos = () => {
    dispatch(onDeleteAllPhotos());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const file = [e.dataTransfer.files[0]];
    const url = URL.createObjectURL(new Blob(file));
    dispatch(onUploadPhoto(url));
  };

  return (
    <div className={styles.container}>
      <input onChange={handleTitleChange} value={title} type="text" />
      <textarea onChange={handleDescChange} value={description} rows={2} />
      <DropZone onDrop={handleDrop} />
      <button
        onClick={handleDeletePhotos}
        className={styles.button}
        type="button"
      >
        Delet All Photos
      </button>
    </div>
  );
};
