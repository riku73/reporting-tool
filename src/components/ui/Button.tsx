import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-primary text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 active:translate-y-0',
        secondary: 'bg-card-bg text-text-primary border border-border hover:border-primary-orange hover:bg-primary-orange/10',
        outline: 'bg-transparent text-primary-orange border-2 border-primary-orange hover:bg-primary-orange hover:text-white',
        ghost: 'bg-transparent text-text-secondary hover:text-primary-orange hover:bg-primary-orange/10',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
        xl: 'px-10 py-5 text-xl rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    children,
    loading = false,
    icon,
    iconPosition = 'left',
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={clsx(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        
        {children}
        
        {!loading && icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };