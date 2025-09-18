"use client";
import { useRouter } from "next/navigation";
import AssignmentForm from "@/components/forms/AssignmentForm/AssignmentForm";
import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";

export default function AssignmentCreatePage() {
    const router = useRouter();

    const handleSubmit = (formData) => {
        // TODO: Submit form data to API
        console.log("Form data:", formData);
        router.push("/success");
    };

    return (
        <AuthLayout showRobot={true}>
            <AssignmentForm onSubmit={handleSubmit} />
        </AuthLayout>
    );
}
