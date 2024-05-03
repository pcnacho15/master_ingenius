import { Switch } from "@nextui-org/react";
import { useTheme } from "../../hooks/useTheme";
import { MoonIcon } from "../../icons/MoonIcon";
import { SunIcon } from "../../icons/SunIcon";

export const ToggleButton = () => {
  const { handleChangeDarkMode, dark } = useTheme();
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
