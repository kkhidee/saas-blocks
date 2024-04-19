import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useId } from 'react';

export type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Checkbox = ({ label, checked, onChange, disabled, ...rest }: CheckboxProps) => {
  const randomId = useId();

  return (
    <div className="flex items-center space-x-3">
      <input
        {...rest}
        id={randomId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-5 w-5 rounded border-2 border-text bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:focus:ring-text disabled:opacity-30"
      />
      <label htmlFor={randomId} className="block text-sm font-semibold text-heading">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
