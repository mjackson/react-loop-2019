import { useEffect, useRef, useState, useCallback } from 'react';

export function useLogging(message) {
  useEffect(() => {
    console.log(message);
  }, [message]);
}

function getLocalStorageValue(key) {
  const val = localStorage.getItem(key);
  if (!val) return null;
  try {
    return JSON.parse(val);
  } catch (e) {
    return null;
  }
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function usePersistentState(key, defaultState = '') {
  const [state, setState] = useState(getLocalStorageValue(key) || defaultState);

  useEffect(() => {
    setLocalStorage(key, state);
  });

  return [state, setState];
}

export function useUndo([state, setState]) {
  const history = useRef([state]);
  const [index, setIndex] = useState(0);

  function undo() {
    setIndex(Math.max(0, index - 1));
  }
  function redo() {
    setIndex(Math.min(history.current.length - 1, index + 1));
  }
  function newSetState(nextState) {
    const nextIndex = index + 1;
    // Truncate any future redos.
    history.current = history.current.slice(0, nextIndex);
    history.current[nextIndex] = nextState;
    setIndex(nextIndex);
    setState(nextState);
  }

  return [history.current[index], newSetState, undo, redo];
}

export function useLogger([state, dispatch]) {
  const actionRef = useRef();

  const newDispatchRef = useCallback(action => {
    actionRef.current = action;
    dispatch(action);
  }, [dispatch]);

  useEffect(() => {
    const action = actionRef.current;

    if (action) {
      console.group('Dispatch');
      console.log('Action:', action);
      console.log('State:', state);
      console.groupEnd();
    }
  }, [state]);

  return [state, newDispatchRef.current];
}

export function useThunk([state, dispatch]) {
  const stateRef = useRef();
  stateRef.current = state;

  const getStateRef = useRef(() => stateRef.current);

  const newDispatchRef = useRef(action => {
    if (typeof action === 'function') {
      action(newDispatchRef.current, getStateRef.current);
    } else {
      dispatch(action);
    }
  });

  return [state, newDispatchRef.current];
}
