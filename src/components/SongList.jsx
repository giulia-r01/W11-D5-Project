import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSongs } from "../redux/actions"
import "bootstrap/dist/css/bootstrap.min.css"

const SongList = () => {
  const dispatch = useDispatch()
  const { songs, loading, error } = useSelector((state) => state.songs)

  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])

  if (loading)
    return (
      <div className="text-center mt-5">Asppetta che sta arrivandooo...</div>
    )
  if (error)
    return <div className="text-danger mt-5 text-center">Error: {error}</div>

  return (
    <div className="mt-4">
      <h2 className="text-white ps-3">Radiohead Tracks</h2>
      <div className="row  px-3">
        {songs.slice(0, 8).map((song) => (
          <div className="col-4 col-md-3 mb-4" key={song.id}>
            <div className="card help-color text-white">
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
        ))}
      </div>
    </div>
  )
}

export default SongList
