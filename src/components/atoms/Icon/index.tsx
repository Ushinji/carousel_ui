import * as React from 'react';

type Props = {
  children: string;
  className?: string;
}

const Icon: React.FC<Props> = ({ className = '', children }) => {
  return (
    <i className={ className ? `material-icons ${className}` : 'material-icons'}>
      {children}
    </i>
  );
}

export default Icon;
