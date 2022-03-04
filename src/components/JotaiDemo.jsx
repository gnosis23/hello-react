import {atom, useAtom} from "jotai";

const count1Atom = atom(0);
const count2Atom = atom(0);
const count3Atom = atom(0);
const totalAtom = atom(get => (
  get(count1Atom) + get(count2Atom)
))

const Counter = ({ countAtom }) => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount(c => c + 1);
  return <>{count} <button onClick={inc}>+1</button></>
};

// const totalAtom = atom(
//   get => get(count1Atom) + get(count2Atom)
// );

const Total = () => {
  const [total] = useAtom(totalAtom);
  return <>{total}</>;
};

export default function JotaiDemo() {
  return (
    <>
      <div>
        <Counter countAtom={count1Atom} /> +
      </div>
      <div>
        <Counter countAtom={count2Atom} />
      </div>
      <div>
        =
        <Total />
      </div>
      <h1>333</h1>
      <span>
      <Counter countAtom={count3Atom} />
      </span>
    </>
  )
}