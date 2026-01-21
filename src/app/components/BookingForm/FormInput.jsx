'use client'
import "./FormInput.css";
export default function FormInput({ 
  label, 
  value, 
  onChange, 
  type = "text", 
  placeholder = "Input Text",
  suffixIcon 
}) {
  return (
    <div className="form-input-container">
      <label className="input-header">{label}</label>
      <div className="input-underline-row">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="clean-input"
        />
        {suffixIcon && (
          <div className="input-icon-area">
            {suffixIcon}
          </div>
        )}
      </div>
    </div>
  );
}