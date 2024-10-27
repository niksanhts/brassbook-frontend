import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $api } from "../api";

export const loadAlbums = createAsyncThunk('albums/loadAlbum', async () => {
  const { data: albumsData } = await $api.get('/v1/albums');

  return albumsData.albums;
})

const initialState = {
  albums: [],
  isAlbumsLoading: false,
}

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload
    },
    addAlbum: (state, action) => {
      state.albums.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadAlbums.pending, (state) => {
      state.isAlbumsLoading = true
    })
    builder.addCase(loadAlbums.fulfilled, (state, action) => {
      console.log('action.payload', action.payload)
      state.albums = action.payload
      state.isAlbumsLoading = false
    })
  }
})

export const { setAlbums, addAlbum } = albumSlice.actions

export default albumSlice.reducer