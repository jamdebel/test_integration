import { Dialog, Transition, RadioGroup } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isSunday } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '../lib/utils';
import { PaymentModal } from './PaymentModal';
import { timeSlots, services } from '../config/booking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0]);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedPrice, setSelectedPrice] = useState(services[0].prices[0]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleBookingClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                <Dialog.Panel className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Calendar Section */}
                    <div>
                      <h3 className="font-cursive text-3xl text-brand-blue mb-4">
                        Choisissez une date
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Les réservations sont ouvertes tous les jours sauf le dimanche
                      </p>

                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <button
                            onClick={previousMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                          </button>
                          <h4 className="text-lg font-medium">
                            {format(currentDate, 'MMMM yyyy', { locale: fr })}
                          </h4>
                          <button
                            onClick={nextMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                            <div key={day} className="py-1 text-gray-500 font-medium">
                              {day}
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                          {days.map((day, dayIdx) => {
                            const isSelected = selectedDate && isSameDay(day, selectedDate);
                            const isCurrentMonth = isSameMonth(day, currentDate);
                            const isDisabled = isSunday(day) || !isCurrentMonth;

                            return (
                              <button
                                key={day.toString()}
                                onClick={() => !isDisabled && setSelectedDate(day)}
                                disabled={isDisabled}
                                className={cn(
                                  'h-10 rounded-lg text-sm relative',
                                  'transition-all duration-200',
                                  isSelected && 'bg-brand-blue text-white',
                                  !isSelected && !isDisabled && 'hover:bg-brand-blue/10',
                                  isDisabled && 'text-gray-300 cursor-not-allowed',
                                  !isDisabled && 'text-gray-900',
                                  isToday(day) && !isSelected && 'text-brand-coral font-bold'
                                )}
                              >
                                {format(day, 'd')}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <h3 className="font-cursive text-2xl text-brand-blue mb-4">
                        Choisissez un créneau
                      </h3>
                      <RadioGroup value={selectedTimeSlot} onChange={setSelectedTimeSlot}>
                        <div className="space-y-3">
                          {timeSlots.map((slot) => (
                            <RadioGroup.Option
                              key={slot.id}
                              value={slot}
                              className={({ checked }) => cn(
                                'relative rounded-lg px-5 py-4 cursor-pointer flex focus:outline-none',
                                'border transition-all duration-200',
                                checked ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-200'
                              )}
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={cn(
                                            'font-medium',
                                            checked ? 'text-brand-blue' : 'text-gray-900'
                                          )}
                                        >
                                          {slot.label}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as="span"
                                          className="text-gray-500"
                                        >
                                          {slot.time}
                                        </RadioGroup.Description>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="flex-shrink-0 text-brand-blue">
                                        <div className="h-2 w-2 rounded-full bg-brand-blue" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Services Section */}
                    <div>
                      <h3 className="font-cursive text-3xl text-brand-blue mb-4">
                        Nos Tarifs
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Choisissez le service qui vous convient
                      </p>

                      <RadioGroup value={selectedService} onChange={(service) => {
                        setSelectedService(service);
                        setSelectedPrice(service.prices[0]);
                      }}>
                        <div className="space-y-6">
                          {services.map((service) => (
                            <div key={service.id}>
                              <RadioGroup.Label className="font-cursive text-2xl text-brand-blue">
                                {service.name}
                              </RadioGroup.Label>
                              <div className="mt-3 space-y-3">
                                {service.prices.map((price) => (
                                  <RadioGroup.Option
                                    key={price.id}
                                    value={service}
                                    onClick={() => setSelectedPrice(price)}
                                    className={({ checked }) => cn(
                                      'relative rounded-lg px-5 py-4 cursor-pointer flex focus:outline-none',
                                      'border transition-all duration-200',
                                      checked && selectedPrice.id === price.id
                                        ? 'border-brand-blue bg-brand-blue/5'
                                        : 'border-gray-200'
                                    )}
                                  >
                                    {({ checked }) => (
                                      <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                          <div className="text-sm">
                                            <RadioGroup.Label
                                              as="p"
                                              className={cn(
                                                'font-medium',
                                                checked ? 'text-brand-blue' : 'text-gray-900'
                                              )}
                                            >
                                              {price.label}
                                            </RadioGroup.Label>
                                            <RadioGroup.Description
                                              as="div"
                                              className="mt-2 space-y-1"
                                            >
                                              {'includes' in price && price.includes?.map((feature, index) => (
                                                <div key={index} className="flex items-center text-sm text-gray-500">
                                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-coral mr-2" />
                                                  {feature}
                                                </div>
                                              ))}
                                            </RadioGroup.Description>
                                          </div>
                                        </div>
                                        <div className="flex items-baseline">
                                          <span className="text-2xl font-bold text-brand-coral">
                                            {price.amount}
                                          </span>
                                          <span className="ml-1 text-gray-500">Dhs</span>
                                        </div>
                                      </div>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>

                      <button
                        className={cn(
                          'w-full mt-8 py-4 rounded-lg font-semibold text-white transition-all',
                          'bg-brand-blue hover:bg-opacity-90',
                          (!selectedDate || !selectedTimeSlot) &&
                            'opacity-50 cursor-not-allowed'
                        )}
                        disabled={!selectedDate || !selectedTimeSlot}
                        onClick={handleBookingClick}
                      >
                        Réserver maintenant
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </>
  );
}