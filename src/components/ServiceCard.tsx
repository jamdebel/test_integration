import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceCardDetails {
  duration?: string;
  schedule?: string;
  frequency?: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  details?: ServiceCardDetails;
  className?: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  imageSrc,
  details, 
  className 
}: ServiceCardProps) {
  return (
    <div 
      className={cn(
        'group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl',
        'transform transition-all duration-500 hover:-translate-y-2',
        'flex flex-col h-full cursor-pointer relative',
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r',
        'before:from-brand-blue/0 before:to-brand-coral/0 before:opacity-0',
        'before:transition-opacity before:duration-500 hover:before:opacity-10',
        className
      )}
    >
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <div className="p-2 bg-brand-coral rounded-lg mr-3">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-cursive text-2xl">{title}</h3>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      
      {details && (
        <div className="mt-auto space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
          {details.duration && (
            <p className="flex items-center">
              <span className="font-semibold mr-2 text-brand-coral transition-colors duration-300 group-hover:text-brand-blue">
                Durée:
              </span>
              {details.duration}
            </p>
          )}
          {details.frequency && (
            <p className="flex items-center">
              <span className="font-semibold mr-2 text-brand-coral transition-colors duration-300 group-hover:text-brand-blue">
                Fréquence:
              </span>
              {details.frequency}
            </p>
          )}
          {details.schedule && (
            <p className="flex items-center">
              <span className="font-semibold mr-2 text-brand-coral transition-colors duration-300 group-hover:text-brand-blue">
                Horaires:
              </span>
              {details.schedule}
            </p>
          )}
        </div>
      )}
    </div>
  );
}