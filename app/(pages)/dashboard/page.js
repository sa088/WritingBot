"use client";
import { useRouter } from "next/navigation";
import SimpleLayout from "@/components/layouts/SimpleLayout/SimpleLayout";
import HistoryDataTable from "@/components/tables/HistoryDataTable/HistoryDataTable";
import Button from "@/components/common/Button/Button";

export default function DashboardPage() {
    const router = useRouter();

    const handleAddNewAssignment = () => {
        router.push("/assignment-details");
    };

    return (
        <SimpleLayout>
            <div className="w-full max-w-none">
                <div className="flex flex-col md:flex-row md:items-center justify-start md:justify-between gap-5 mb-5">
                    <h2 className="text-[20px] lg:text-[24px] font-bold">History/Record</h2>
                    <Button
                        onClick={handleAddNewAssignment}
                        variant="primary"
                        size="sm"
                        className="self-end px-5 py-3"
                    >
                        Add New Assignment
                    </Button>
                </div>
                <HistoryDataTable />
            </div>
        </SimpleLayout>
    );
}
