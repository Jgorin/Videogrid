import React, {useEffect} from "react"
import "../assets/VideoGrid.scss"
import VideoTiles from "./VideoTiles"

const VideoGrid = (props) => {

  const setElementDimensions = () => {
    const c = document.getElementById("canvas")
    const tiles = document.getElementById("tiles")
    c.width = window.innerWidth / 2
    c.height = window.innerHeight / 2
  }

  useEffect(() => {
    setElementDimensions()
  }, [])

  return(
    <section className="video-grid">
      <VideoTiles fileCount={10}/>
      <canvas id="canvas" width="1100" height="900"/>
    </section>
  )
}

export default VideoGrid