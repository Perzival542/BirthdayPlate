import React, { useState } from "react";
import { Button, Modal } from "antd";
import { EyeFilled, DownloadOutlined } from "@ant-design/icons";
import { Canvas } from "./canvas.component";

export const PreviewModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        size="large"
        type="primary"
        onClick={showModal}
        icon={<EyeFilled />}
      >
        Previsualizar
      </Button>
      <Modal
        title="Preview"
        open={isModalOpen}
        okText={'Descargar'}
        onOk={handleOk}
        centered
        width={1000}
        footer={[
          <Button key="download" size="large" type="primary" icon={<DownloadOutlined/>}>
            Descargar
          </Button>
        ]}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Canvas/>
        </div>
      </Modal>
    </>
  );
};
