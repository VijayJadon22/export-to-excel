import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportToExcel = ({ data, fileName = "data.xlsx" }) => {
  const handleExport = () => {
    if (!data || data.length === 0) {
      alert("No data to be exported");
    }

    // 1. Convert array of objects to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // 2. Create a new workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 3. Write the workbook to a binary array
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // 4. Create a Blob and trigger download
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, fileName);
  };

  return <button onClick={handleExport}>Export</button>;
};

export default ExportToExcel;
