import ReactDOM from 'react-dom/client';
import './index.scss';
import { Game, makePieces } from "./components/Game";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Game
    start_pos={makePieces()}
    squares={Array(9).fill("")}
  />
);

