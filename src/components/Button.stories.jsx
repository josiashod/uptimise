import Button from "./Button";
import Add from "./icons/Add";

export default {
  title: "Components/forms/Button",
  components: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  type: "fill",
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  label: "Button",
  type: "outline",
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  label: "Button",
  type: "fill",
  icon: Add,
};
