import React, { useRef, useState } from "react";
import "./FileUploadInput.css";

const FileUploadInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("No File Chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "No File Chosen");
  };

  // Core file handler
  //   const handleFile = (file?: File) => {
  //     if (!file) return;

  //     if (file.size > MAX_SIZE) {
  //       alert("File too large. Maximum size is 40 MiB.");
  //       return;
  //     }

  //     setFileName(file.name);
  //     // Upload or process the file here
  //     console.log("Selected file:", file);
  //   };

  // useEffect(() => {
  //   const handleDrop = (e: DragEvent) => {
  //     e.preventDefault();
  //     const file = e.dataTransfer?.files?.[0];
  //     //   handleFile(file);
  //     setFileName(file ? file.name : "No File Chosen");
  //   };

  //   const handleDragOver = (e: DragEvent) => {
  //     e.preventDefault(); // Prevent default to allow drop
  //   };

  //   window.addEventListener("dragover", handleDragOver);
  //   window.addEventListener("drop", handleDrop);

  //   return () => {
  //     window.removeEventListener("dragover", handleDragOver);
  //     window.removeEventListener("drop", handleDrop);
  //   };
  // }, []);

  return (
    <div>
      <p className="fileUploadInput-heading">
        Browse your computer: (Max: 40MiB)
      </p>

      <div
        className="custom-file-upload"
        onClick={() => inputRef.current?.click()}
      >
        <span className="choose-file">Choose file</span>
        <span className="file-name">{fileName}</span>
      </div>

      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className="fileUploadInput-input-hidden"
      />
    </div>
  );
};

export default FileUploadInput;
