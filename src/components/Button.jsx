export const Button = ({
  className = "",
  size = "default",
  children,
...props

}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-light bg-lilac-light text-primary hover:bg-lilac-light/90 shadow-lg shadow-lilac-light/25";

  {/* Define the sizes of buttons depending on the formatting of the text */}
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};