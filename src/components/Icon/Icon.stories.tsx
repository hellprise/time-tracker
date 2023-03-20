import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    type: {
      type: "string",
      description: "Вибір іконки",
      control: {
        type: "radio",
        options: ["Bulk", "Tag", "Close"],
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const notActive = Template.bind({});
notActive.args = {
  type: "Bulk",
};
