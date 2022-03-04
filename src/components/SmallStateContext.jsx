import {
    createContext,
    createElement,
    useContext,
    useState,
} from "react";

const createStateContext = (useValue) => {
    const StateContext = createContext(null);
    const StateProvider = ({ initialValue, children }) => (
        <StateContext.Provider value={useValue(initialValue)}>
            {children}
        </StateContext.Provider>
    );
    const useContextState = () => {
        const value = useContext(StateContext);
        if (value === null) throw new Error("Provider missing");
        return value;
    };
    return [StateProvider, useContextState];
};

const useNumberState = (init) => useState(init || 0);

const [Count1Provider, useCount1] = createStateContext(useNumberState);
const [Count2Provider, useCount2] = createStateContext(useNumberState);


const Counter1 = () => {
    const [count1, setCount1] = useCount1();
    return (
        <div>
            Count1: {count1}
            <button onClick={() => setCount1(c => c + 1)}>+1</button>
        </div>
    )
};

const Counter2 = () => {
    const [count1, setCount1] = useCount2();
    return (
        <div>
            Count1: {count1}
            <button onClick={() => setCount1(c => c + 1)}>+1</button>
        </div>
    )
};

const Parent = () => (
  <div>
    <Counter1 />
    <Counter1 />
    <Counter2 />
    <Counter2 />
  </div>
);

const App = () => {
    const providers = [
        [Count1Provider, { initialValue: 10 }],
        [Count2Provider, { initialValue: 10 }],
    ];
    return (
        providers.reduceRight(
            (children, [Component, props]) =>
                createElement(Component, props, children),
            <Parent />
        )
    );
};

export default App;
