import React, { useRef, useState } from "react";
import "./FileUploadInput.css";

interface FileUploadInputProps {
  height?: number;
  padding?: string;
  flex?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
}
const FileUploadInput = ({
  height = 38,
  padding = "10px 33px",
  flex = false,
  marginTop = true,
  marginBottom = true,
}: FileUploadInputProps) => {
  const style = {
    height,
    padding,
    flex: flex ? "flex" : "initial",
    alignItems: flex ? "center" : "initial",
    marginTop: marginTop ? 20 : 0,
    marginBottom: marginBottom ? 10 : 0,
    width: flex ? "44%" : "100%",
    gap: flex ? 20 : 0,
  };

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
    <div
      style={{
        width: style.width,
        display: style.flex,
        alignItems: style.alignItems,
        gap: style.gap,
      }}
    >
      <p
        className="fileUploadInput-heading"
        style={{ marginTop: style.marginTop, marginBottom: style.marginBottom }}
      >
        Browse your computer: (Max: 40MiB)
      </p>

      <div
        className="custom-file-upload"
        style={{ height: style.height }}
        onClick={() => inputRef.current?.click()}
      >
        <span className="choose-file" style={{ padding: style.padding }}>
          Choose file
        </span>
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
