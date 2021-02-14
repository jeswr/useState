import { useReducer } from 'react';

/**
 * useState implemented using the useReducer API
 * @param init The initial value of the function
 * @param modification Modifies the action value
 */
export function useState<T>(init: T): [T, (action: T) => void];
export function useState<K, T>(init: T, modification: (param: K) => T): [T, (action: K) => void];
export function useState<K, T>(init: T, modification?: (param: K) => T): [T, (action: K) => void] {
  if (modification) {
    return useReducer<(state: T, action: K) => T>(
      (_, action) => modification(action),
    init);
  }
  return useReducer<(state: T, action: K) => T>(
    (_, action) => action as unknown as T,
  init);
}
