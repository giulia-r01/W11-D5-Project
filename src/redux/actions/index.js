export const fetchSongs = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SONGS_REQUEST" })

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=radiohead"
    )
    const data = await response.json()

    dispatch({
      type: "FETCH_SONGS_SUCCESS",
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: "FETCH_SONGS_FAILURE",
      payload: error.message,
    })
  }
}
