import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Gallery from "./Component/Gallery";

function App() {
  return (
    <>
     <DndProvider backend={HTML5Backend} >
        <Gallery/>
     </DndProvider>
    </>
  );
}

export default App;
