import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export default function SearchBar({ value, onChange, onSubmit }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Autofocus on mount (nice UX)
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit?.();
  };

  return (
    <div className="search-bar">
      <label htmlFor="search" className="sr-only"></label>
      <input
        id="search"
        ref={inputRef}
        type="text"
        placeholder="Search by title…"
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        
      />
      <button onClick={onSubmit} aria-label="Search">Search</button>
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};
