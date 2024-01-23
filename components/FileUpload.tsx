'use clinet';
import React from 'react';
import { FileUploader, Button } from '@ui5/webcomponents-react';

const FileUpload = () => {
  return (
    <div>
      <div className='bg-white h-90px w-90vw p-10'>
        <FileUploader placeholder="Choose a file for upload..."
          accept=".xlsx, .csv"
          // onChange={function _a(){}}
        />
        <Button className='border-2 border-blue-500 hover:opacity-75'>
            Upload
        </Button>
      </div>
    </div>
  )
}

export default FileUpload