import { useId } from "react";
/**
 * @param {string} placeholder 
 * @param {string} value
 * @param {string} lebel
 * @param {(s: string) => void} onChange
 */

export function Input ({placeholder, value, onChange, label}) {
    const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input
            id={id}
            className="from-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}