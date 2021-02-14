import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from '../lib';

describe('Main useState tests', () => {
  it('Should return default value if there are no calls to dispatch', () => {
    const { result } = renderHook(() => useState(0));

    expect(result.current[0]).toBe(0);
  });

  it('Should take last application', () => {
    const { result } = renderHook(() => useState(0));

    act(() => {
      result.current[1](1);
      result.current[1](2);
      result.current[1](3);
      result.current[1](4);
      result.current[1](5);
    });

    expect(result.current[0]).toBe(5);
  });

  it('Should return default value if there are no calls to dispatch [with modifier function]', () => {
    const { result } = renderHook(() => useState(0, (props: {value: number}) => props.value));

    expect(result.current[0]).toBe(0);
  });

  it('Should take last application [with modifier function]', () => {
    const { result } = renderHook(() => useState(0, (props: {value: number}) => props.value));

    act(() => {
      result.current[1]({ value: 1 });
      result.current[1]({ value: 2 });
      result.current[1]({ value: 3 });
      result.current[1]({ value: 4 });
      result.current[1]({ value: 5 });
    });

    expect(result.current[0]).toBe(5);
  });
});
