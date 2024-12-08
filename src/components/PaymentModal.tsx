import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, CreditCard, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const paymentMethods = [
    {
      id: 'cash',
      name: 'Paiement en espèces',
      description: 'Payez en espèces lors du service',
      icon: Wallet,
    },
    {
      id: 'online',
      name: 'Paiement en ligne',
      description: 'Payez maintenant par carte bancaire',
      icon: CreditCard,
    },
  ];

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>

                <div className="mb-8 text-center">
                  <h3 className="font-cursive text-3xl text-brand-blue">
                    Mode de paiement
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Choisissez votre méthode de paiement préférée
                  </p>
                </div>

                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className={cn(
                        'w-full p-4 rounded-xl border border-gray-200',
                        'hover:border-brand-blue hover:bg-brand-blue/5',
                        'transition-all duration-200 group',
                        'flex items-center text-left'
                      )}
                    >
                      <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mr-4">
                        <method.icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-brand-blue transition-colors">
                          {method.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}