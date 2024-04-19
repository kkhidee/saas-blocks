import { ChangeEventHandler } from 'react';

type RadioItem = {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

type RadioListProps = {
  items: RadioItem[];
  legend?: string;
};

const RadioList = ({ items, legend }: RadioListProps) => {
  return (
    <fieldset>
      {legend && <legend className="text-sm font-medium text-text">{legend}</legend>}

      <div className="mt-4 space-y-3">
        {items?.map(el => (
          <div className="flex items-center space-x-3">
            <input
              name={el.name}
              id={el.name}
              type="radio"
              checked={el.checked}
              onChange={el.onChange}
              className="h-5 w-5 border-2 border-text bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:focus:ring-text disabled:opacity-30"
            />
            <label htmlFor={el.name} className="block text-sm font-semibold text-heading">
              {el.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioList;
