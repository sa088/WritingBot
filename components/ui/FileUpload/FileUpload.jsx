import { useState } from "react";
import clsx from "clsx";
import { AlertCircle } from "lucide-react";

const FileUpload = ({
    label,
    accept,
    maxSize,
    onChange,
    error,
    className,
}) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            onChange && onChange(file);
        } else {
            setFileName("");
            onChange && onChange(null);
        }
    };

    return (
        <div className={clsx("w-full", className)}>
            {label && (
                <label htmlFor="file-upload" className="block text-sm md:text-base font-semibold text-[#1E1C2866] mb-2">
                    {label}
                </label>
            )}

            <div className="relative mb-2">
                <input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="file-upload"
                />
                <div
                    className={clsx(
                        "flex items-center w-full px-4 py-3 border-0 rounded-lg shadow-sm bg-[#F7F6F9] text-[#1E1C28] transition-colors duration-200",
                        error && "border-1 border-red-500"
                    )}
                >
                    <button
                        type="button"
                        className="bg-white border border-[#BFBFBF] rounded-lg px-3 py-1 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors duration-200 mr-3"
                        onClick={() => document.getElementById("file-upload").click()}
                    >
                        Choose file
                    </button>
                    <span className={clsx("text-xs md:text-sm font-medium flex-1", fileName ? "text-[#1E1C28]" : "text-[#1E1C2866]")}>
                        {fileName || "No file chosen"}
                    </span>
                </div>
            </div>

            <div className={clsx("flex items-center", error ? "justify-between" : "justify-end")}>
                {error && (
                    <div className="flex items-center text-red-500 text-xs">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        <span>{error}</span>
                    </div>
                )}
                {maxSize && (
                    <span className="text-xs md:text-sm">Under {maxSize}</span>
                )}
            </div>
        </div>
    );
};

export default FileUpload;