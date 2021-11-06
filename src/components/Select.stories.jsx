import Select from "./Select";

export default {
  title: "Components/forms/Select",
  components: Select,
};

const DATAS = [
  {
    id: "H3",
    fullName: "John Doe",
    competence: "Web developper",
  },
  {
    id: "H4",
    fullName: "Taric Show",
    competence: "Designer",
  },
  {
    id: "H5",
    fullName: "Sarah Show",
    competence: "CEO",
  },
];

const Template = (args) => <Select {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "select-box",
  placeholder: "Choisir un nom ",
  datas: DATAS,
  renderItem: ({ fullName, id }) => <option value={id}>{fullName}</option>,
};
