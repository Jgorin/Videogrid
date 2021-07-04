import React from "react"
import { Grid } from "@material-ui/core"

const VideoTiles = (props) => {
  const { fileCount } = props

  let rows = []
  let sqrtFileCount = Math.sqrt(fileCount)
  let row = Math.ceil(sqrtFileCount)
  let col = Math.round(sqrtFileCount)
  let count = 0
  for(let i = 0; i < col; i++){
    let items = []
    for(let j = 0; j < row; j++){
      if(count < fileCount){
        items.push(<Grid item xs><h1>test</h1></Grid>)
        count++
      }
    }
    rows.push(<Grid container spacing={3}>{items}</Grid>)
  }

  return(
    <div style={{width: window.innerWidth, height: window.innerHeight}} className="grid">
      {rows}
    </div>
  )
}

export default VideoTiles