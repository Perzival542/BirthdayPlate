/* eslint-disable react/prop-types */
import React from "react";
import { Input, InputNumber, Select, Space } from "antd";

export const TextInput = ({ placeholder }) => {
  return <Input size="large" placeholder={placeholder} />;
};

export const DayInput = ({ placeholder }) => {
  const handleChange = (value) => {
    console.log("changed:", value);
  };

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  }));

  return (
    <Space direction="vertical">
      <Select
        size="large"
        placeholder={placeholder}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={days}
      />
    </Space>
  );
};

export const MonthInput = ({ placeholder }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  let months = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  return (
    <Space direction="vertical">
      <Select
        size="large"
        placeholder={placeholder}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={months.map((month) => ({
            value: month,
            label: month
        }))}
      />
    </Space>
  );
};
