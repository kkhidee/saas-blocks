import { Switch } from '@headlessui/react';

type ToggleProps = {
  enabled: boolean;
  onChange: (checked: boolean) => void;
  label: string;
};

const Toggle = ({ enabled, onChange, label }: ToggleProps) => {
  return (
    <Switch.Group as="div" className="flex items-center space-x-4">
      <Switch.Label className="text-sm text-text">{label}</Switch.Label>

      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-layer-3'
        } relative inline-flex w-14 shrink-0 cursor-pointer rounded-full px-[3px] py-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80`}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled ? 'translate-x-[26px]' : 'translate-x-0'
          } pointer-events-none inline-block h-6 w-6 transform rounded-full bg-heading shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </Switch.Group>
  );
};

export default Toggle;
