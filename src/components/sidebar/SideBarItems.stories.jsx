import Home from "../icons/Home";
import SideBarItems from "./SideBarItems";

export default {
  title: "Components/sidebar",
  components: SideBarItems,
};

const Template = (args) => <SideBarItems {...args} />;

export const SideBarItems = Template.bind({});

SideBarItems.args = {
  icon: Home,
  name: "Home",
  to: "/",
};
