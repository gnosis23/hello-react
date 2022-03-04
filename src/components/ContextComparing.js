import {memo, useEffect, useRef, useState} from "react";
import ColorComponent, {MemoedColorComponent} from "./ColorComponent";
import {ColorContext} from "../data/ColorContext";

const DummyComponent = () => {
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });
  return <div>Dummy (renders: {renderCount.current})</div>;
};

const MemoedDummyComponent = memo(DummyComponent);


export default function ContextComparing() {
  const [color, setColor] = useState("red");
  return (
    <ColorContext.Provider value={color}>
      <>
        <input value={color} onChange={e => setColor(e.target.value)} />
        <ColorComponent />
        <MemoedColorComponent />
        <DummyComponent />
        <MemoedDummyComponent />
      </>
    </ColorContext.Provider>
  )
}
