import clsx from "clsx";
import { AlertCircle } from "lucide-react";

const Textarea = ({
    label,
    error,
    className,
    id,
    name,
    rows = 4,
    ...props
}) => {
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
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    className={clsx(
                        "w-full font-semibold px-4 py-3 border-0 rounded-lg shadow-sm placeholder-[#1E1C2866] placeholder:font-medium focus:outline-none focus:ring-0 bg-[#F7F6F9] text-[#1E1C28] resize-y min-h-[100px]",
                        error && "border-1 border-red-500 focus:ring-red-500"
                    )}
                    {...props}
                />
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

export default Textarea;