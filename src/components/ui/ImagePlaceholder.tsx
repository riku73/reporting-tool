import React from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function ImagePlaceholder({ 
  width, 
  height, 
  text, 
  className = '',
  icon 
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-primary-orange/20 to-accent-blue/20 border border-border rounded-lg flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center space-y-2">
        {icon && (
          <div className="text-primary-orange">
            {icon}
          </div>
        )}
        {text && (
          <span className="text-text-secondary text-sm font-medium">
            {text}
          </span>
        )}
      </div>
    </div>
  );
}