import Textarea from "./Textarea";

export default {
  title: "Components/forms/Textarea",
  components: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Commentaire",
  placeholder: "Votre text ici..",
};
