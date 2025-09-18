"use client";
import { useRouter } from "next/navigation";
import AssignmentForm from "@/components/forms/AssignmentForm/AssignmentForm";
import TwoSideLayout from "@/components/layouts/TwoSideLayout/TwoSideLayout";

export default function AssignmentCreatePage() {
    const router = useRouter();

    const handleSubmit = (formData) => {
        // TODO: Submit form data to API
        console.log("Form data:", formData);
        router.push("/success");
    };

    return (
        <TwoSideLayout showRobot={true}>
            <AssignmentForm onSubmit={handleSubmit} />
        </TwoSideLayout>
    );
}
