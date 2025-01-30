import { forwardRef } from 'react';
import './Info.scss';

interface InfoProps {
  variant: 'success' | 'error';
  message: string;
  className?: string;
}

const Info = forwardRef<HTMLDivElement, InfoProps>(({ variant, message, className }, ref) => {
  return (
    <div className={`info info--${variant} small-text ${className}`} ref={ref}>
      <span>
        {message}
      </span>
    </div>
  );
});

Info.displayName = 'Info';

export default Info;