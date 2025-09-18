import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import FileUpload from "../../common/FileUpload/FileUpload";

const validationSchema = yup.object().shape({
    file: yup.mixed().required("File is required"),
    zipFile: yup
        .mixed()
        .required("Zip file is required")
        .test("fileSize", "File size must be under 10MB", (value) => {
            if (!value) return false;
            return value.size <= 10 * 1024 * 1024; // 10MB in bytes
        })
        .test("fileType", "Only ZIP files are allowed", (value) => {
            if (!value) return false;
            return value.type === "application/zip" || value.name.endsWith(".zip");
        }),
    ragSessionId: yup
        .string()
        .required("Rag session id is required")
        .min(3, "Rag session id must be at least 3 characters long"),
    additionalInstructions: yup
        .string()
        .required("Additional instructions are required")
        .min(5, "Additional instructions must be at least 5 characters long"),
    wordCountTarget: yup
        .string()
        .required("Word count target is required"),
    assignmentType: yup
        .string()
        .required("Assignment type is required"),
    qualityTarget: yup
        .string()
        .required("Quality target is required")
        .matches(/^\d+$/, "Quality target must be a number")
        .test("range", "Quality target must be between 1-100", (value) => {
            const num = parseInt(value);
            return num >= 1 && num <= 100;
        }),
});

const AssignmentForm = ({ onSubmit, loading = false }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
        defaultValues: {
            ragSessionId: "",
            additionalInstructions: "",
            wordCountTarget: "",
            assignmentType: "",
            qualityTarget: "",
        },
    });

    const handleFileChange = (file) => {
        setValue("file", file, { shouldValidate: true });
    };

    const handleZipFileChange = (file) => {
        setValue("zipFile", file, { shouldValidate: true });
    };

    const onFormSubmit = (data) => {
        console.log("Form data:", data);
        onSubmit && onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            <FileUpload
                label="File"
                onChange={handleFileChange}
                error={errors.file?.message}
            />

            <FileUpload
                label="Zip file"
                accept=".zip"
                onChange={handleZipFileChange}
                error={errors.zipFile?.message}
                maxSize="10 mb"
            />

            <Input
                label="Rag session id"
                type="text"
                id="ragSessionId"
                name="ragSessionId"
                placeholder="Enter Rag Session Id"
                {...register("ragSessionId")}
                error={errors.ragSessionId?.message}
                className="text-xs md:text-sm"
            />

            <Input
                label="Additional instructions"
                type="text"
                id="additionalInstructions"
                name="additionalInstructions"
                placeholder="Write Additional Instructions"
                {...register("additionalInstructions")}
                error={errors.additionalInstructions?.message}
                className="text-xs md:text-sm"
            />

            <Input
                label="Word count target"
                type="text"
                id="wordCountTarget"
                name="wordCountTarget"
                placeholder="Enter Word Count Target"
                {...register("wordCountTarget")}
                error={errors.wordCountTarget?.message}
                className="text-xs md:text-sm"
            />

            <Input
                label="Assignment type"
                type="text"
                id="assignmentType"
                name="assignmentType"
                placeholder="Enter Assignment Type"
                {...register("assignmentType")}
                error={errors.assignmentType?.message}
                className="text-xs md:text-sm"
            />

            <Input
                label="Quality target"
                type="text"
                id="qualityTarget"
                name="qualityTarget"
                placeholder="Enter Quality Target (1-100)"
                {...register("qualityTarget")}
                error={errors.qualityTarget?.message}
                className="text-xs md:text-sm"
            />

            <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={loading}
                className="w-full mt-8"
            >
                {loading ? "Submitting..." : "Submit"}
            </Button>
        </form>
    );
};

export default AssignmentForm;