"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";

const Guestbook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<{ name: string; message: string }[]>(
    []
  );

  const handleAddEntry = () => {
    if (name && message) {
      setEntries([...entries, { name, message }]);
      setName("");
      setMessage("");
    }
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Sổ lưu niệm", 20, 20);
    doc.setFontSize(12);
    entries.forEach((entry, index) => {
      doc.text(
        `${index + 1}. ${entry.name}: ${entry.message}`,
        20,
        30 + index * 10
      );
    });
    doc.save("guestbook.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white text-gray-800">
      <div className="max-w-2xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Sổ lưu niệm</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <textarea
            placeholder="Lời chúc của bạn"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={handleAddEntry}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Thêm lời chúc
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Lời chúc đã nhận:</h3>
          <ul className="list-disc list-inside">
            {entries.map((entry, index) => (
              <li key={index}>
                <strong>{entry.name}:</strong> {entry.message}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleExportPDF}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Xuất ra PDF
        </button>
      </div>
    </div>
  );
};

export default Guestbook;
