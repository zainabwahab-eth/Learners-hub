const Alert = ({ visible, message, type = "info", onClose }) => {
  if (!visible) return null; // 👈 hides alert when not visible

  const alertStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };

  return (
    <div
      className={`fixed top-10 z-99 right-5 border px-4 py-3 rounded-md shadow-md transition-all duration-300 ${alertStyles[type]}`}
    >
      <div className="flex items-center justify-between gap-4">
        <p>{message}</p>
        {onClose && (
          <button onClick={onClose} className="text-sm font-bold">
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
