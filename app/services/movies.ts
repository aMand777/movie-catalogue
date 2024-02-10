import { instanceApi } from '../lib/axios';

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await instanceApi.get(`/movie/popular?&page=${page}`)
    return response
  } catch (error) {
    throw error
  }
}

export const searchMovie = async (q: string) => {
  try {
    const response = await instanceApi.get(`${process.env.NEXT_PUBLIC_BASEURL}/search/movie?&query=${q}&page=1`)
    return response
  } catch (error) {
    throw error
  }
}

export const getDetailMovie = async (id: string) => {
  try {
    const response = await instanceApi.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const getNowPlayingMovies = async (page = 1) => {
  try {
    const response = await instanceApi.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/now_playing?&page=${page}`)
    return response
  } catch (error) {
    throw error
  }
}

export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await instanceApi.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/top_rated?&page=${page}`)
    return response
  } catch (error) {
    throw error
  }
}

export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await instanceApi.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/upcoming?&page=${page}`)
    return response
  } catch (error) {
    throw error
  }
}

export const getTrendingMovies = async (page = 1) => {
  try {
    const response = await instanceApi.get(`${process.env.NEXT_PUBLIC_BASEURL}/trending/movie/day?page=${page}`)
    return response
  } catch (error) {
    throw error
  }
}