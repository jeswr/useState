import { useReducer } from 'react';

function castIdentity<T, K extends T>(value: K): T {
  return value;
}

/**
 * useState implemented using the useReducer API
 * @param init The initial value of the function
 * @param modification Modifies the action value
 */
export function useState<T, K extends T>(init: T): [T, (action: K) => void];
export function useState<T, K>(init: T, modification: (param: K) => T): [T, (action: K) => void];
export function useState<T, K>(init: T, modification?: (param: K) => T): [T, (action: K) => void] {
  if (modification) {
    return useReducer<(state: T, action: K) => T>(
      (_, action) => modification(action),
    init);
  }
  return useReducer<(state: T, action: K) => T>(
    (_, action: K) => castIdentity<T, K>(action),
  init);
}
