import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../icons/MoonIcon";
import { SunIcon } from "../../icons/SunIcon";

export const ToggleButton = ({ handleChangeDarkMode, dark }) => {
  return (
    <Switch
      defaultSelected={dark} /* true (Sol) / false (luna) */
      size="md"
      color="warning"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={handleChangeDarkMode}
    ></Switch>
  );
};
