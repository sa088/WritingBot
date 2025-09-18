import clsx from "clsx";
import { useState } from "react";
import { AlertCircle, Eye, EyeOff } from "lucide-react";

const Input = ({ label, error, className, id, name, type, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === "password";
    const inputType = isPasswordType && showPassword ? "text" : type;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={clsx("w-full", className)}>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm md:text-base font-semibold text-[#1E1C2866] mb-2"
                >
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={inputType}
                    className={clsx(
                        "w-full font-semibold px-4 py-3 border-0 rounded-lg shadow-sm placeholder-[#1E1C2866] placeholder:font-medium transition-all duration-200 focus:outline-none focus:ring-0 bg-[#F7F6F9] text-[#1E1C28]",
                        isPasswordType && "pr-12",
                        error && "border-1 border-red-500 focus:ring-red-500"
                    )}
                    {...props}
                />
                {isPasswordType && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 cursor-pointer flex items-center pr-4 text-[#1E1C2866] hover:text-[#1E1C28] transition-colors duration-200"
                        tabIndex={-1}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                )}
            </div>
            {error && (
                <div className="flex items-center mt-2 text-red-500 text-xs">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};

export default Input;