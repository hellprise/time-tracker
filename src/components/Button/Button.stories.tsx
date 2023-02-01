import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  // argTypes: {
  //   color: {
  //     type: "string",
  //     description: "Варіанти кольору кнопки",
  //     defaultValue: "primary",
  //     control: {
  //       type: "radio",
  //       options: ["primary", "secondary", "transparent"],
  //     },
  //   },
  //   size: {
  //     type: "string",
  //     description: "Варіанти розміру кнопки",
  //     defaultValue: "s",
  //     control: {
  //       type: "radio",
  //       options: ["none", "s", "m", "l", "xl"],
  //     },
  //   },
  //   children: {
  //     type: "string",
  //     description: "Текст кнопки",
  //     name: "label",
  //     defaultValue: "It's a button!",
  //   },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "It's a primary!",
  size: "s",
  onClick: () => console.log("click"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "It's a secondary!",
  size: "m",
  onClick: () => console.log("click"),
};

export const Transparent = Template.bind({});
Transparent.args = {
  color: "transparent",
  children: "It's transparent!",
  size: "l",
  onClick: () => console.log("click"),
};
