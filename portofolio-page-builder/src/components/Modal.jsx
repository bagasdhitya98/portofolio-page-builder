const Modal = ({ isOpen, onClose, children }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white p-4 rounded-md shadow-md">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
