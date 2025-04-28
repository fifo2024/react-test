import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Html2Pdf = () => {
    const exportPdfRef = useRef<HTMLDivElement>(null);

    const onExportPdf = () => {
        const element = exportPdfRef.current;
        const opt = {
            margin: 1,
            filename: "myfile.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            pagebreak: { mode: "avoid-all", before: "#page2el" },
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();

        // Old monolithic-style usage:
        html2pdf(element, opt);
    };

    return (
        <div>
            <div>
                <button
                    onClick={onExportPdf}
                    style={{
                        padding: "0 8px",
                        background: "#3080aa",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    export pdf
                </button>
            </div>
            <div
                ref={exportPdfRef}
                style={{
                    height: "calc(80vh - 80px)",
                    padding: "24px",
                    background: "#242230",
                    color: "#efefef",
                }}
            >
                <div>this is text</div>
            </div>
        </div>
    );
};

export default Html2Pdf;
