import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
  cancelBtnLabel?: string;
  sendBtnLabel?: string;
  additionalCancelBtnCallback?: () => void;
  additionalSendBtnCallback?: () => void;
  type?: 'plain' | 'simple';
};

const Modal = ({
  isOpen,
  closeModal,
  title,
  children,
  cancelBtnLabel = 'Отменить',
  sendBtnLabel = 'Сохранить',
  additionalCancelBtnCallback,
  additionalSendBtnCallback,
  type = 'simple',
}: ModalProps) => {
  const handleCancel = () => {
    additionalCancelBtnCallback?.();
    closeModal();
  };

  const handleSend = () => {
    additionalSendBtnCallback?.();
    closeModal();
  };

  const titleStyles = {
    plain: 'flex-1 px-6 py-5 sm:py-6',
    simple: 'flex h-16 flex-shrink-0 items-center justify-between px-6',
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-layer-1/60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 flex min-h-screen items-end justify-center overflow-hidden px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative inline-flex w-full transform flex-col overflow-hidden rounded-xl bg-layer-3 text-left align-bottom shadow-2xl transition-all sm:my-8 sm:max-w-md sm:align-middle">
              <div className="absolute right-5 top-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text child-svg:h-5 child-svg:w-5"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <div className={`${titleStyles[type]}`}>
                <Dialog.Title as="h3" className="text-lg font-semibold text-heading">
                  {title}
                </Dialog.Title>

                {type === 'plain' && <div className="mt-2">{children}</div>}
              </div>

              {type === 'simple' && <hr className="border-hr" />}

              {type === 'simple' && <div className="flex-1 px-6 py-5 sm:py-6">{children}</div>}

              <div className="flex h-16 flex-shrink-0 items-center justify-end space-x-2 bg-layer-3 px-6 shadow-lg">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  {cancelBtnLabel}
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  {sendBtnLabel}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
