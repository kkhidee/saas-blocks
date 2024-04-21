import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useId } from 'react';

type InputProps = {
  label?: string;
  helper?: string;
  invalid?: boolean;
  errorMessage?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  leadingAddon?: string;
  trailingAddon?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({
  label,
  helper,
  invalid,
  errorMessage,
  leadingIcon,
  trailingIcon,
  leadingAddon,
  trailingAddon,
  ...rest
}: InputProps) => {
  const randomId = useId();

  return (
    <div>
      {label && (
        <label htmlFor={randomId} className="block text-sm font-semibold text-heading">
          {label}
        </label>
      )}
      <div className={`${leadingIcon || trailingIcon || leadingAddon || trailingAddon ? 'relative mt-2 flex' : ''}`}>
        {leadingAddon && (
          <div className="pointer-events-none left-0 -mr-0.5 inline-flex flex-shrink-0 items-center overflow-hidden rounded-xl rounded-r-none border-2 border-muted-1 px-4 focus-within:z-20">
            <span className="font-semibold text-heading sm:text-sm">{leadingAddon}</span>
          </div>
        )}
        {leadingIcon && !leadingAddon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
            <span className="h-5 w-5 text-text">{leadingIcon}</span>
          </div>
        )}
        <input
          {...rest}
          id={randomId}
          aria-describedby={`${rest?.name}:helper`}
          className={`block w-full rounded-xl ${leadingAddon ? 'rounded-l-none' : ''} border-2 ${invalid ? 'border-red-500' : 'border-muted-3'} bg-transparent px-4 py-2.5 ${leadingIcon && !leadingAddon ? 'pl-11' : ''} ${trailingAddon ? 'pr-14' : ''} ${trailingIcon && !trailingAddon ? 'pr-11' : ''} ${!trailingIcon && !leadingIcon && !leadingAddon && !trailingAddon ? 'mt-2' : ''} font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm`}
        />
        {trailingAddon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-4 focus-within:z-20">
            <span className="font-semibold text-heading sm:text-sm">{trailingAddon}</span>
          </div>
        )}
        {trailingIcon && !trailingAddon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-4 focus-within:z-20">
            <span className="h-5 w-5">{trailingIcon}</span>
          </div>
        )}
      </div>
      {errorMessage && (
        <p aria-live="polite" id={`${rest?.name}:error`} className="mt-2 text-xs font-medium text-red-400">
          {errorMessage}
        </p>
      )}
      {helper && (
        <p aria-live="polite" id={`${rest?.name}:helper`} className="mt-2 text-xs font-medium text-text">
          {helper}
        </p>
      )}
    </div>
  );
};

export default Input;
