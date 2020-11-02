import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface UploadFileProps {
    handleUploadFile: (e: any) => void;
    upload: () => void;
}

const UploadFileComponent: React.FC<UploadFileProps> = ({handleUploadFile, upload}) => {
    return(
        <div className="film-upload">
            <Form>
                <Form.File
                    id="custom-file"
                    label="Upload file"
                    onChange={handleUploadFile}
                />
            </Form>
            <Button onClick={upload}>Upload</Button>
        </div>
    );
};

export const UploadFile = React.memo(UploadFileComponent);
