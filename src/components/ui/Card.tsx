import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const cardVariants = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-card-bg border border-border rounded-2xl',
        tech: 'tech-card',
        gradient: 'bg-gradient-to-br from-card-bg to-card-bg/50 border-gradient rounded-2xl',
        glow: 'bg-card-bg border border-border rounded-2xl glow-orange',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
        responsive: 'p-card-mobile md:p-card-tablet lg:p-card-desktop',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1',
        glow: 'hover:glow-orange',
        scale: 'hover:scale-105',
        border: 'hover:border-primary-orange',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'responsive',
      hover: 'lift',
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  gradient?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, gradient, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(cardVariants({ variant, padding, hover }), className)}
        {...props}
      >
        {variant === 'tech' && (
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-tech" />
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex flex-col space-y-1.5 mb-6', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx('h4 text-text-primary font-display', className)}
    {...props}
  >
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('text-text-secondary body-text', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('', className)} {...props} />
));

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex items-center pt-6 mt-6 border-t border-border', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};

export type { CardProps };