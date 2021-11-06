import InputFile from "./InputFile";

export default {
  title: "Components/forms/InputFile",
  components: InputFile,
};

const Template = (args) => <InputFile {...args} />;
export const Default = Template.bind({});
Default.args = {};
