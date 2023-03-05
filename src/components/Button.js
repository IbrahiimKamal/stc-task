function Button({ label, onClick, disabled, color, styleClass }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`app-btn ${color ? `app-btn--${color}` : ''} ${styleClass}`}
    >
      {label}
    </button>
  );
}

export default Button;
