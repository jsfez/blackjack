/* eslint-disable react/prop-types */
import clsx from "clsx";

export const Button = ({ children, disabled, className, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        className,
        "p-2 mt-4 text-white px-5 py-2.5 text-center",
        disabled
          ? " bg-slate-400 cursor-not-allowed font-medium rounded-lg text-sm "
          : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
      )}
      {...props}
    >
      {children}
    </button>
  );
};
