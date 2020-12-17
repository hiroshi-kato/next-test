import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import useInput from 'hooks/useInput';

describe('useInput', () => {
  it('initial value', () => {
    const { result } = renderHook(() => useInput('hello'));

    expect(result.current.value).toBe('hello');
  });

  it('onChange', () => {
    const { result } = renderHook(() => useInput('hello'));

    const { container } = render(
      <input type='text' {...result.current} data-testid='input' />
    );

    const input = container.querySelector('input');

    act(() => {
      fireEvent.change(input!, { target: { value: 'kuma' } });
    });

    expect(result.current.value).toBe('kuma');
  });
});
