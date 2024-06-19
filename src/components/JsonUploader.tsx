import React from "react";
import "./JsonUploader.css";

interface JsonUploaderProps {
  onUpload: (data: any) => void;
}

const JsonUploader: React.FC<JsonUploaderProps> = ({ onUpload }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        try {
          const json = JSON.parse(text);
          localStorage.setItem("uploadedJson", text);
          onUpload(json);
        } catch (error) {
          alert("Invalid JSON file");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="uploader-container">
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="file-input"
      />
    </div>
  );
};

export default JsonUploader;
