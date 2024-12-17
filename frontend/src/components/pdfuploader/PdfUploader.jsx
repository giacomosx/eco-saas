import React, {useState} from 'react';
import {uploadDirect} from "@uploadcare/upload-client";

const PdfUploader = () => {
    const [fileData, setFileData] = useState(null);

    const handleClick = async () => {
        try {
            const pdfFile = await uploadDirect(
                fileData, {
                    publicKey: process.env.REACT_APP_UPLOADCARE_APIKEY,
                    store: 'auto',
                }
            )
            const pdfUrlPath = await pdfFile.cdnUrl

            console.log(pdfUrlPath)

        } catch (e) {
            console.error(e);
        }
    }

    const onChangeFile = (e) => {
        setFileData(e.target.files[0]);
    }

    return (
        <div>
            <input type='file' onChange={onChangeFile}/>
            <button type='button' onClick={handleClick}>Upload</button>
        </div>
    );
};

export default PdfUploader;
