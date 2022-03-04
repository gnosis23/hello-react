import {useCallback, useEffect, useMemo, useState} from "react";
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

const store = createStore({ count1: 0, count2: 0 });

const useStore = (store) => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsub = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState());
    return unsub;
  }, [store]);
  return [state, store.setState]
};

const useStoreSelector = (store, selector) => {
  const [state, setState] =
    useState(() => selector(store.getState()));
  useEffect(() => {
    const unsub = store.subscribe(() => {
      setState(selector(store.getState()));
    });
    setState(selector(store.getState()));
    return unsub;
  },[store, selector]);
  return state;
};

const Component1 = () => {
  const state = useSubscription(useMemo(() => ({
    getCurrentValue: () => store.getState().count1,
    subscribe: store.subscribe,
  }), []));
  const inc = () => {
    store.setState(prev => ({ ...prev, count1: prev.count1 + 1 }))
  };
  return (
    <div>
      {state} <button onClick={inc}>+1</button>
    </div>
  )
};

const Component2 = () => {
  const state = useSubscription(useMemo(() => ({
    getCurrentValue: () => store.getState().count2,
    subscribe: store.subscribe,
  }), []));
  const inc = () => {
    store.setState(prev => ({ ...prev, count2: prev.count2 + 1 }))
  };
  return (
    <div>
      {state} <button onClick={inc}>+1</button>
    </div>
  )
};

export default function () {
  return (
    <>
      <Component1 />
      <Component1 />
      <Component2 />
      <Component2 />
    </>
  )
}