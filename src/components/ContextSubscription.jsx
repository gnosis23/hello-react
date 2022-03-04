import {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {useSubscription} from "use-subscription";

const createStore = (initialState) => {
  let state = initialState;
  const callbacks = new Set();
  const getState = () => state;
  const setState = (nextState) => {
    state =
      typeof nextState === 'function'
        ? nextState(state)
        : nextState;
    callbacks.forEach((callback) => callback());
  };
  const subscribe = (callback) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  }
  return { getState, setState, subscribe }
};

const StoreContext = createContext(createStore({ count: 0, text: 'hello' }));

const StoreProvider = ({ initialState, children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

const useSelector = (selector) => {
  const store = useContext(StoreContext);
  return useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.getState()),
        subscribe: store.subscribe
      }),
      [store, selector]
    )
  )
};

const useSetState = () => {
  const store = useContext(StoreContext);
  return store.setState;
};

const selectCount = (state) => state.count;

const Component = () => {
  const count = useSelector(selectCount);
  const setState = useSetState();
  const inc = () => {
    setState(prev => ({ ...prev, count: prev.count + 1 }))
  };
  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  )
};

export default function () {
  return (
    <>
      <h1>Using default store</h1>
      <Component />
      <Component />
      <StoreProvider initialState={{ count: 10 }}>
        <h1>Using store provider</h1>
        <Component />
        <Component />
        <StoreProvider initialState={{ count: 20 }}>
          <h1>Inner</h1>
          <Component />
          <Component />
        </StoreProvider>
      </StoreProvider>
    </>
  )
}