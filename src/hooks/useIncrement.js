/**
 * import {useState} from "react";

export function useIncrement ({base = 0, max = Infinity, min = -Infinity}) {
    const [state, setState] = useState(base)
    return {
        count: state,
        increment: () => setState(v => v < max ? v+1 : v),
        decrement: () => setState(v => v > min ? v-1 : v)
    }
}
 */
import {useState} from "react";
export function useIncrement({ base = 0, max = Infinity, min = -Infinity }) {
    const [state, setState] = useState(base);
    const increment = () => setState((v) => (v < max ? v + 1 : v));
    const decrement = () => setState((v) => (v > min ? v - 1 : v));
    return [state, increment, decrement]; // tableau
  }
  