/* eslint-disable react/prop-types */
import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

export const PictureInput = ({ messages, onStatusChange }) => {
  const props = {
    name: "file",
    multiple: false,
    action: "",
    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if(info.fileList.length > 0) {
        if (onStatusChange) onStatusChange("selected", info.file);
      } else {
        if (onStatusChange) onStatusChange("removed", null);
      }
      // if (status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      //   if (onStatusChange) onStatusChange("success", info.file);
      // } else if (status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);
      //   if (onStatusChange) onStatusChange("error", info.file);
      // }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{messages.titleMessage}</p>
      <p className="ant-upload-hint">{messages.bodyMessage}</p>
    </Dragger>
  );
};
