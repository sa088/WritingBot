"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TwoSideLayout from "@/components/layouts/TwoSideLayout/TwoSideLayout";
import Button from "@/components/common/Button/Button";
import FileUpload from "@/components/common/FileUpload/FileUpload";
import Input from "@/components/common/Input/Input";

const validationSchema = yup.object().shape({
    ragSessionId: yup
        .string()
        .required("Rag session id is required")
        .min(3, "Rag session id must be at least 3 characters long"),
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
});

export default function AssignmentDetails() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
    });

    const handleFileUpload = (file) => {
        console.log("File uploaded:", file);
        setValue("zipFile", file, { shouldValidate: true });
    };

    const onSubmit = (data) => {
        console.log("Form data:", data);
        router.push("/assignment-create");
    };

    return (
        <TwoSideLayout
            title="Assignment details"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FileUpload
                    label="Zip File"
                    accept=".zip"
                    maxSize="10 mb"
                    onChange={handleFileUpload}
                    error={errors.zipFile?.message}
                />

                <Input
                    label="Rag Session Id"
                    type="text"
                    id="ragSessionId"
                    name="ragSessionId"
                    placeholder="Enter Rag Session Id"
                    {...register("ragSessionId")}
                    error={errors.ragSessionId?.message}
                    className="mb-6 text-xs md:text-sm"
                />

                <Button type="submit" variant="primary" size="md" className="w-full mt-8">
                    Submit
                </Button>
            </form>
        </TwoSideLayout>
    );
}
