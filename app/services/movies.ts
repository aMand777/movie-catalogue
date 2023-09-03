import axios from 'axios'
const auth = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  }
} 

export const getPopularMovies = (page: number, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/popular?&page=${page}`, auth)
    .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const searchMovie = (src: string, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/search/movie?&query=${src}&page=1`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getDetailMovie = (id: string, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/${id}`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getNowPlayingMovies = (page: number, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/now_playing?&page=${page}`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getTopRatedMovies = (page: number, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/top_rated?&page=${page}`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getUpcomingMovies = (page: number, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/upcoming?&page=${page}`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getTrendingMovies = (page: number, res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/trending/movie/day?page=${page}`, auth)
    .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}