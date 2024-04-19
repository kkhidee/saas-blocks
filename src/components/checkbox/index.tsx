import { useId } from 'react';

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const randomId = useId();

  return (
    <div className="flex items-center space-x-3">
      <input
        id={randomId}
        type="checkbox"
        className="h-5 w-5 rounded border-2 border-text bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:focus:ring-text disabled:opacity-30"
      />
      <label htmlFor={randomId} className="block text-sm font-semibold text-heading">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
