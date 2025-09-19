"use client";
import SimpleLayout from "@/components/layouts/SimpleLayout/SimpleLayout";
import Button from "@/components/common/Button/Button";
import Image from "next/image";

export default function SuccessPage() {
    const handleDownload = () => {
        // TODO: Implement download functionality
        console.log("Download assignment");
    };

    return (
        <SimpleLayout>
            <div className="flex flex-col items-center justify-between gap-2 text-center max-w-md mx-auto ">
                <div className="relative max-w-[150px] w-[120px] sm:w-full h-auto aspect-square">
                    <Image
                        src="/successCheck.png"
                        alt="Success checkmark"
                        fill
                        className="object-contain"
                    />
                </div>

                <h2 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold">
                    Your assignment is ready!
                </h2>

                <Button
                    onClick={handleDownload}
                    variant="primary"
                    size="md"
                    className="w-full mt-8 lg:mt-10"
                >
                    Download
                </Button>
            </div>
        </SimpleLayout>
    );
}
