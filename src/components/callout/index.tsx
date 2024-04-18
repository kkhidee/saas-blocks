import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/16/solid';

type CalloutProps = {
  title: string;
  subtitle: string;
  variant?: 'info' | 'success' | 'error' | 'warning';
  onClose?: () => void;
};

const Callout = ({ title, subtitle, variant = 'info', onClose }: CalloutProps) => {
  const variantStyles = {
    info: 'text-blue-400',
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-orange-400',
  };

  const chooseIcon = () => {
    switch (variant) {
      case 'info':
        return <InformationCircleIcon className="h-6 w-6 flex-shrink-0" />;
      case 'success':
        return <CheckCircleIcon className="h-6 w-6 flex-shrink-0" />;
      case 'error':
        return <ExclamationTriangleIcon className="h-6 w-6 flex-shrink-0" />;
      case 'warning':
        return <ExclamationCircleIcon className="h-6 w-6 flex-shrink-0" />;
      default:
        return undefined;
    }
  };

  return (
    <div className="relative rounded-xl bg-layer-2 p-4 pr-16">
      <div className={`${variantStyles[variant]} flex items-start space-x-2.5`}>
        {chooseIcon()}
        <div>
          <div className="mt-0.5 text-sm font-semibold">{title}</div>
          <div className="mt-1 text-xs font-medium text-text">{subtitle}</div>
        </div>
      </div>

      <button
        type="button"
        className="absolute right-3 top-3 inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        onClick={onClose}
      >
        <span className="sr-only">Close toast</span>
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Callout;
