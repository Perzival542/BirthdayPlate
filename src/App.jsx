import React from "react";
import { StarFilled, GiftFilled } from "@ant-design/icons";
import { Tabs } from "antd";
import './styles/App.css';
import { BirthdayContent } from "./contents/birthday.content";
import { WelcomeContent } from "./contents/welcome.content";

const onChange = (key) => {
  console.log(key);
}

const items = [
  {
    key: '1',
    label: 'Placa de Cumpleaños',
    children: <BirthdayContent />,
    icon: <StarFilled/>,
  },
  {
    key: '2',
    label: 'Placa de Bienvenida',
    children: <WelcomeContent />,
    icon: <GiftFilled/>,
    disabled: true,
  }
]

const App = () => {
  return (
    <div className="tabs-container mx-2 bg-white">
      <Tabs className="w-100 " defaultActiveKey="1" items={items} onChange={onChange}/>
    </div>
  );
};

export default App;
