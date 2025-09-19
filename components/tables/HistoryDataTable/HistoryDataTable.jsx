import { useMemo } from "react";
import { Download } from "lucide-react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const HistoryDataTable = ({ assignments = [] }) => {
    const handleDownload = (assignmentId) => {
        console.log("Download assignment:", assignmentId);
    };

    const mockAssignments = [
        {
            id: 1,
            submittedDate: "08-15-2025",
            submissionTime: "02:00 PM",
            creationTime: "03:00 PM",
            regSessionId: "0134",
            wordCountTarget: 24,
            assignmentType: "Essay",
        },
        {
            id: 2,
            submittedDate: "08-15-2025",
            submissionTime: "02:00 PM",
            creationTime: "03:00 PM",
            regSessionId: "754",
            wordCountTarget: 50,
            assignmentType: "Report",
        },
        {
            id: 3,
            submittedDate: "08-15-2025",
            submissionTime: "02:00 PM",
            creationTime: "03:00 PM",
            regSessionId: "45677",
            wordCountTarget: 23,
            assignmentType: "Assignment",
        },
        {
            id: 4,
            submittedDate: "08-15-2025",
            submissionTime: "02:00 PM",
            creationTime: "03:00 PM",
            regSessionId: "3578",
            wordCountTarget: 45,
            assignmentType: "Literature",
        },
        {
            id: 5,
            submittedDate: "08-15-2025",
            submissionTime: "02:00 PM",
            creationTime: "03:00 PM",
            regSessionId: "987",
            wordCountTarget: 76,
            assignmentType: "Essay",
        },
    ];

    const data = assignments.length > 0 ? assignments : mockAssignments;

    const columns = useMemo(
        () => [
            columnHelper.accessor("submittedDate", {
                header: "Submitted Date",
            }),
            columnHelper.accessor("submissionTime", {
                header: "Submission Time",
            }),
            columnHelper.accessor("creationTime", {
                header: "Creation Time",
            }),
            columnHelper.accessor("regSessionId", {
                header: "Rag Session Id",
            }),
            columnHelper.accessor("wordCountTarget", {
                header: "Word Count Target",
            }),
            columnHelper.accessor("assignmentType", {
                header: "Assignment Type",
            }),
            columnHelper.display({
                id: "actions",
                header: "Action",
                cell: ({ row }) => (
                    <div className="px-3">
                        <button
                            onClick={() => handleDownload(row.original.id)}
                            className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:text-[#24A7FF] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors duration-200"
                            aria-label="Download Assignment"
                        >
                            <Download className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                ),
            }),
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full overflow-hidden rounded-xl shadow-sm border border-gray-200">
            <div className="overflow-x-auto max-h-120 overflow-y-auto">
                <table className="w-full whitespace-nowrap">
                    <thead className="bg-[#24A7FF] sticky top-0 z-10">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base font-bold text-white"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {table.getRowModel().rows.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`
                                    ${index % 2 === 0
                                        ? "bg-[#F7F6F9]"
                                        : "bg-white"
                                    } 
                                    hover:bg-gray-50 transition-colors duration-150
                                `}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base"
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryDataTable;