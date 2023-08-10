import { useState } from "react";

// Write your Color component here
const App = () => {
  const Color = ({color, selectedColor})=>{
    return (<div className={color}
          onClick={()=>setSelectedColor(color)}></div>)
  }  
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <><Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor}/>
        <Color color = "green" setSelectedColor={setSelectedColor}/>
        </>
       
      </div>
    </div>
  );
};

export default App;
