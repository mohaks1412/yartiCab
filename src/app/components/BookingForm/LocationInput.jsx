import './LocationInput.css';

export default function LocationInput({
  label,
  value,
  onChange,
  placeholder,
  iconType, // 'location' or 'pin'
}) {
  return (
    <div className="input-field-group">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          className="custom-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        <div className="input-icon">
          {iconType === 'location' ? (
             /* Location Crosshair Icon */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3m0 14v3m10-10h-3M5 12H2" />
            </svg>
          ) : (
            /* Pin/Target Icon */
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}