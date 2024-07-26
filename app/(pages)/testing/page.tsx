"use client";

import { useState, useRef } from "react";
import { uploadFile, uploadJSON, fetchJSON } from "../../../utils/ipfs";

export default function Home() {
  const [file, setFile] = useState<File | null>(null); // State to hold the selected file
  const [cid, setCid] = useState<string>(""); // State to hold the CID
  const [uploading, setUploading] = useState(false); // State for upload status

  const inputFile = useRef<HTMLInputElement>(null); // Explicitly define as HTMLInputElement

  const upload = async (fileToUpload: File) => {
    try {
      setUploading(true);
      const resData = await uploadFile(fileToUpload);
      setCid(resData.IpfsHash);
      
      console.log("Image Successfully uploaded");
      console.log(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${resData.IpfsHash}`);
      
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      upload(files[0]);
    }
  };

  const addJSON = async () => {
    const sample = {
      name: "Hello",
      age: "18"
    };
    const resData = await uploadJSON(sample);
    console.log("JSON Successfully uploaded");
    console.log(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${resData.IpfsHash}`);

    const jsonData = await fetchJSON(resData.IpfsHash);
    console.log(jsonData);
  };

  return (
    <main className="w-full min-h-screen m-auto flex flex-col justify-center items-center">
      <button onClick={addJSON}>Upload JSON</button>
      <h1>Testing IPFS Feature:</h1>
      <p>Note: You can upload a file here to store data. Avoid uploading large files to prevent memory issues.</p>
      <input type="file" id="file" ref={inputFile} onChange={handleChange} />
      <button disabled={uploading} onClick={() => inputFile.current?.click()}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {cid && (
        <img
          src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`}
          alt="Image from IPFS"
        />
      )}
    </main>
  );
}
