const Button = ({ title, isFilled, onClick }) => {
  const type = {
    filled:
      "w-full h-full flex justify-center items-center cursor-pointer rounded-md bg-cyan-500 hover:bg-cyan-600",
    unfilled:
      "w-full h-full flex justify-center items-center cursor-pointer rounded-md bg-white border border-cyan-500",
  };

  return (
    <span
      className={`${isFilled ? type.filled : type.unfilled}`}
      onClick={onClick}
    >
      <p className={`${isFilled ? "text-white" : "text-cyan-500"} font-medium`}>
        {title}
      </p>
    </span>
  );
};

export default Button;
