import { createSlice } from "@reduxjs/toolkit";

import { photos, IMAGES_PER_PAGE } from "../constants/photos";

interface IImages {
  src: string;
}

export interface GalleryState {
  title: string;
  description: string;
  images: IImages[] | [];
  length: number;
  currentPage: number;
  slicedImages: IImages[] | [];
}

const initialState: GalleryState = {
  title: "Photo Gallery",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore distinctio autem sunt pariatur maiores quo, reprehenderit est odio",
  images: photos,
  length: photos.length,
  currentPage: 1,
  slicedImages: photos.slice(0, 9),
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    nextPage: (state) => {
      const isPage = Math.ceil(state.images.length / IMAGES_PER_PAGE);
      if (isPage < 2 || state.currentPage >= isPage) return;

      state.slicedImages = state.images.slice(
        (state.currentPage + 1) * IMAGES_PER_PAGE - IMAGES_PER_PAGE,
        (state.currentPage + 2) * IMAGES_PER_PAGE - IMAGES_PER_PAGE
      );
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage === 1) return;

      state.slicedImages = state.images.slice(
        (state.currentPage - 1) * IMAGES_PER_PAGE - IMAGES_PER_PAGE,
        state.currentPage * IMAGES_PER_PAGE - IMAGES_PER_PAGE
      );
      state.currentPage -= 1;
    },
    firstPage: () => initialState,
    onTitleChange: (state, action) => {
      const value = action.payload;
      return { ...state, title: value };
    },
    onDescChange: (state, action) => {
      const value = action.payload;
      state.description = value;
    },
    onDeleteAllPhotos: (state) => {
      return {
        ...state,
        images: [],
        slicedImages: [],
        length: 0,
        currentPage: 1,
      };
    },
    onUploadPhoto: (state, action) => {
      const newObj = { src: action.payload };
      if (state.slicedImages.length < 9) {
        return {
          ...state,
          images: [...state.images, newObj],
          slicedImages: [...state.slicedImages, newObj],
        };
      } else {
        return {
          ...state,
          images: [...state.images, newObj],
        };
      }
    },
  },
});

export const {
  nextPage,
  prevPage,
  firstPage,
  onTitleChange,
  onDescChange,
  onDeleteAllPhotos,
  onUploadPhoto,
} = gallerySlice.actions;

export default gallerySlice.reducer;
