export const fetchSongs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      )
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: "SET_SONGS",
          payload: data.data,
        })
      } else {
        console.error("Errore nel fetch")
      }
    } catch (error) {
      console.error("Errore nella richiesta", error)
    }
  }
}
