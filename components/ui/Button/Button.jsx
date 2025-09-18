import clsx from "clsx";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    disabled = false,
    type = "button",
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center font-bold rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary:
            "bg-[#24A7FF] hover:bg-[#0C82D0] text-white focus:ring-blue-500 shadow-sm",
        secondary:
            "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm md:text-base",
        md: "px-6 py-3 text-base md:text-lg",
        lg: "px-8 py-4 text-lg md:text-xl",
    };

    const disabledClasses = "opacity-70 cursor-not-allowed";

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                disabled && disabledClasses,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;