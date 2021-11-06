import CheckBox from "./CheckBox";

export default {
  title: "Components/forms/CheckBox",
  components: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  name: "options",
  checked: true,
};
