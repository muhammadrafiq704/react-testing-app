import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";
import { describe, expect, it } from "vitest";

describe('useCounter Hook Tests', () => {
    it('should initialize with default value of 0', () => {
        const { result } = renderHook(() => useCounter({ initialValue: 10 }));
        expect(result.current.count).toBe(10);
    });
    it('should initialize with custom value', () => {
        const { result } = renderHook(() => useCounter({ initialValue: 3 }));
        expect(result.current.count).toBe(3);
    });
    it('should increment the counter', () => {
        const { result } = renderHook(() => useCounter({ initialValue: 1 }));

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(2);
    });
    it('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter({ initialValue: 2 }));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(1);
    });
    it('should reset the counter', () => {
        const { result } = renderHook(() => useCounter({ initialValue: 10 }));
        act(() => {
            result.current.reset();
        });
        expect(result.current.count).toBe(10);
    });
    it('should handle negative values', () => {
        const {result } = renderHook(() => useCounter({initialValue: 0}));
        act(() =>{
            result.current.decrement();
        });
        expect(result.current.count).toBe(0);
    })
})