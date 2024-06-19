import React, { useEffect, useState } from "react";
import DynamicTable from "./components/DynamicTable";
import JsonUploader from "./components/JsonUploader";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("uploadedJson");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleUpload = (jsonData: any) => {
    setData(jsonData);
  };

  return (
    <div className="app-container">
      <h1 className="title">JSON to Table</h1>
      <JsonUploader onUpload={handleUpload} />
      <DynamicTable data={data} />
    </div>
  );
};

export default App;
