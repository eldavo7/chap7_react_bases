/**
 * import { useId, forwardRef } from "react";
import { Input } from "./components/froms/Input.jsx";


 * @param {string} placeholder 
 * @param {string} value
 * @param {string} lebel
 * @param {(s: string) => void} onChange


export const Input = forwardRef(function Input({placeholder, value, onChange, label}, ref) {
    const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input
            ref={ref}
            id={id}
            className="from-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
})
Input.displayName = "Input_Name"
 */

import { forwardRef, useId } from "react";

export const Input = forwardRef(function InputComponent(
  { placeholder, value, onChange, label },
  ref
) {
  const id = useId();
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
