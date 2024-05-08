import React from "react";
import * as Select from "@radix-ui/react-select";

const SelectMenu = () => {
  return (
    // <div>
      <Select.Root defaultValue="apple">
        <Select.Trigger />
        <Select.Content className="text-white">
          <Select.Group className="w-[50px] h-[50px] bg-white">
            <Select.Label className="text-white">Fruits</Select.Label>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="grape" disabled>
              Grape
            </Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.Label>Vegetables</Select.Label>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    // </div>
  );
};

export default SelectMenu;
