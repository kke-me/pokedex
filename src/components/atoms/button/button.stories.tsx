import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { button } from "@/components/atoms/button";

export default {
  title: "atoms/button",
  component: button,
  argTypes: {
  },
} as ComponentMeta<typeof button>;

const Template: ComponentStory<typeof button> = (args) => <button {...args} />;
export const Default = Template.bind({});
Default.args = {

};

