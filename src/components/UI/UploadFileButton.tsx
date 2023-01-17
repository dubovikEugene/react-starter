import React, { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as MyLogo } from "../../images/svgUpload.svg";

interface IUploadFileButton {
  setSelectedFile: React.Dispatch<React.SetStateAction<string | Blob>>;
}

const SyledLabel = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  width: 200px;
  height: 50px;
  background-color: #0d6efd;
  border: 1px solid rgba(27, 31, 35, 0.2);
  color: #fff;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    background-color: #0d65eb;
  }
`;

const StyledInputFile = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

const StyledFileName = styled.p`
  position: absolute;
  bottom: -2.4rem;
  left: 1rem;
  font-size: 0.85rem;
  color: #555;
`;
const UploadFileButton: FC<IUploadFileButton> = ({ setSelectedFile }) => {
  const [FullFileName, setFullFileName] = useState("");

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.currentTarget.files || []);
    if (files.length > 0) {
      const fileName = files[0]!.name;
      const fileSize = (files[0]!.size / 1000).toFixed(2);
      setFullFileName(`${fileName} - ${fileSize}KB`);
      setSelectedFile(files[0]);
    }
  };

  return (
    <SyledLabel htmlFor="file">
      <MyLogo
        style={{ width: 25, height: 25, paddingRight: 10, fill: "white" }}
      />
      Select image
      <StyledInputFile
        id="file"
        type="file"
        onChange={(e) => {
          fileHandler(e);
        }}
      />
      <StyledFileName> {FullFileName}</StyledFileName>
    </SyledLabel>
  );
};

export default UploadFileButton;
