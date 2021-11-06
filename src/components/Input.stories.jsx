import Search from "./icons/Search";
import Input from "./Input";

export default {
  title: "Components/forms/Input",
  components: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  type: "text",
  placeholder: "Placeholder",
  name: "my-input",
  error: "Error message",
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  icon: Search,
  iconPosition: "left",
  label: "Label",
  type: "text",
  placeholder: "Placeholder",
  name: "my-input",
  error: "Error message",
  className: "",
};
