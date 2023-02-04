import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      type: "string",
      description: "Варіанти кольору кнопки",
      defaultValue: "primary",
      control: {
        type: "radio",
        options: ["primary", "secondary", "transparent"],
      },
    },
    size: {
      type: "string",
      description: "Варіанти розміру кнопки",
      defaultValue: "s",
      control: {
        type: "radio",
        options: ["s", "m", "l"],
      },
    },
    children: {
      type: "string",
      description: "Текст кнопки",
      name: "label",
      defaultValue: "It's a button!",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const notActive = Template.bind({});
notActive.args = {
  isActive: false,
  children: "It's a not Active!",
  size: "s",
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
  children: "It's Active!",
  size: "l",
};
