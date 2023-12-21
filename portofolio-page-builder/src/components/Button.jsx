const Button = ({ title, isFilled, children, onClick, buttonType }) => {
  const type = {
    filled:
      "w-full h-full flex justify-center items-center cursor-pointer rounded-md bg-cyan-500 hover:bg-cyan-600",
    unfilled:
      "w-full h-full flex justify-center items-center cursor-pointer rounded-md bg-white border border-cyan-500",
  };

  return (
    <button
      className={`${isFilled ? type.filled : type.unfilled}`}
      onClick={onClick}
      type={buttonType}
    >
      {children}
      <p className={`${isFilled ? "text-white" : "text-cyan-500"} font-medium`}>
        {title}
      </p>
    </button>
  );
};

export default Button;
