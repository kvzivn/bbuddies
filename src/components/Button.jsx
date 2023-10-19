import clsx from "clsx"

const Button = ({ children, onClick, small, secondary, className }) => (
  <button
    onClick={onClick}
    className={clsx(
      "rounded-md font-semibold text-lg border-2 transition-colors",
      small ? "px-5 py-2 text-sm" : "px-6 py-3 text-lg",
      secondary
        ? "bg-white text-primary border-primary hover:bg-amber-50"
        : "bg-primary text-white border-transparent hover:bg-opacity-90",
      className
    )}
  >
    {children}
  </button>
)

export default Button
