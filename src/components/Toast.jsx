function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div
      className={`toast toast-${toast.type}`}
      role="status"
      aria-live="polite"
    >
      {toast.text}
    </div>
  );
}

export default Toast;
