import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children,
  as = 'button',
  href,
  onClick,
  ...props 
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  const Component = as;
  const commonProps = {
    className: cn(
      'px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105',
      variant === 'primary' 
        ? 'bg-brand-blue text-white hover:bg-opacity-90' 
        : 'bg-brand-coral text-white hover:bg-opacity-90',
      className
    ),
    onClick: handleClick,
    ...(href && { href }),
    ...props
  };

  return <Component {...commonProps}>{children}</Component>;
}