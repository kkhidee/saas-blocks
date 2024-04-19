import { ChangeEventHandler } from 'react';

type CheckboxItem = {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

type CheckboxList = {
  items: CheckboxItem[];
  legend?: string;
};

const CheckboxList = ({ items, legend }: CheckboxList) => {
  return (
    <fieldset>
      {legend && <legend className="text-sm font-medium text-text">{legend}</legend>}

      <div className="mt-4 space-y-3">
        {items?.map(el => (
          <div className="flex items-center space-x-3" key={`el-${el.name}`}>
            <input
              name={el.name}
              id={el.name}
              type="checkbox"
              checked={el.checked}
              disabled={el.disabled}
              className="h-5 w-5 rounded border-2 border-text bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:focus:ring-text disabled:opacity-30"
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

export default CheckboxList;
