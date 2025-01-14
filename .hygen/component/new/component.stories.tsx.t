---
to: <%= abs_path %>/<%=lower_name%>.stories.tsx
---
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { <%= name %> } from "<%= alias_path %>";

export default {
  title: "<%= path %>",
  component: <%= name %>,
  argTypes: {
  },
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;
export const Default = Template.bind({});
Default.args = {
<% if (have_props) { %>
  str: "Hello, storybook!",
<%}%>
};

