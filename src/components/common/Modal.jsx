// modal component
// forms ya popup content ke liye use hoga

function Modal({ isOpen, onClose, title, children }) {

    // agar modal open nahi hai to kuch render nahi hoga
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="bg-white rounded-custom w-full max-w-lg p-6 relative animate-fadeIn">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-grayText"
        >
          ✕
        </button>

        <h2 className="text-2xl font-heading font-bold mb-6">
          {title}</h2>

        {children}

      </div>

    </div>
  );
}

export default Modal;