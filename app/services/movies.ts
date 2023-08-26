import axios from 'axios'
const auth = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  }
} 

export const getPopularMovies = (res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/popular?&page=1`, auth)
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

export const getNowPlayingMovies = (res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/now_playing?&page=1`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getTopRatedMovies = (res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/top_rated?page=1`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getUpcomingMovies = (res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/movie/upcoming?page=1`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}

export const getTrendingMovies = (res: any) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/trending/movie/day?language=en-US`, auth)
  .then((response) => {
    res(response)
    })
    .catch((error) => {
    res(error)
  })
}