import "./Tiles.css";
import '../../../node_modules/react-tiles-dnd/esm/index.css'
import { TilesContainer, RenderTileFunction } from "react-tiles-dnd";

const tiles = [

  { text: "Mock Data Chatbot", cols: 2, rows: 1 },
  { text: "Tile 2", cols: 2, rows: 1},

//   { text: "Tile 4", cols: 2, rows: 2 },
//   { text: "Tile 5", cols: 1, rows: 1 },
//   { text: "Tile 6", cols: 1, rows: 1 },
//   { text: "Tile 7", cols: 1, rows: 1 },
//   { text: "Tile 8", cols: 1, rows: 1 },
//   { text: "Tile 9", cols: 2, rows: 1 }
];

const render: RenderTileFunction<typeof tiles[0]> = ({ data, isDragging }) => (
  <div style={{ padding: "0.2rem", width: "100%", }}>
    <div
      className={`tile ${isDragging ? "dragging" : ""} ${data.text == "null" ? "null" : ""}`} style={{ width: "100%", height: "100%" }}>
      {data.text} {isDragging ? "DRAGGING" : null}
    </div>
  </div>
);
const tileSize = (tile: typeof tiles[0]) => ({
  colSpan: tile.cols,
  rowSpan: tile.rows
});

export default function Tiles() {
  return (
    <div className="App" style={{ justifyContent: "center"}}>
      <h1>Fixed tile width, variable columns</h1>
      <p>Try to enlarge/reduce the screen, and the container will adapt</p>
      <div onClick={() => alert("Hello!")} >
      <TilesContainer
        data={tiles}
        renderTile={render}
        tileSize={tileSize}
        forceTileWidth={0}
        forceTileHeight={0}
        
      ></TilesContainer>
      </div>

    </div>
  );
}
