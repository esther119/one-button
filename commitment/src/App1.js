import "./App.css";
import TreasureChest from "./box";
import CollisionDetectionFlow from "./Collision";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      {/* <h1 className="text-3xl font-bold underline mt-96">Hello world!</h1> */}
      <CollisionDetectionFlow></CollisionDetectionFlow>
      <div className="flex justify-center items-center mt-4 mb-4">
        {/* <img src="/scroll.png" alt="scroll" class="absolute-width-96 h-auto" /> */}
      </div>
      <TreasureChest></TreasureChest>
    </div>
  );
}

export default App;
