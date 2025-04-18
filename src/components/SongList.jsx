import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSongs } from "../redux/actions"
import "bootstrap/dist/css/bootstrap.min.css"

const SongList = () => {
  const dispatch = useDispatch()
  const { songs, loading, error } = useSelector((state) => state.songs)

  // Effettua una ricerca iniziale solo se lo store è vuoto
  useEffect(() => {
    if (songs.length === 0) {
      dispatch(fetchSongs("radiohead"))
    }
  }, [dispatch, songs.length])

  if (loading)
    return (
      <div className="text-center mt-5 text-white">
        Aspetta che sta arrivandooo...
      </div>
    )

  if (error)
    return <div className="text-danger mt-5 text-center">Errore: {error}</div>

  return (
    <div className="mt-4">
      <h2 className="text-white ps-3">
        {songs.length > 0 ? "Nuove uscite" : "Cerca qualcosa..."}
      </h2>
      <div className="row px-3">
        {songs.length > 0 ? (
          songs.slice(0, 8).map((song) => (
            <div className="col-6 col-md-3 mb-4" key={song.id}>
              <div className="card help-color text-white h-100">
                <img
                  src={song.album.cover_medium}
                  className="card-img-top"
                  alt={song.title}
                />
                <div className="card-body ps-0">
                  <p className="card-text mb-0">{song.artist.name}</p>
                  <p className="card-text">{song.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center mt-4">Nessun risultato</p>
        )}
      </div>
    </div>
  )
}

export default SongList
