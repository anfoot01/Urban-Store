import { SVGProps, useMemo } from 'react';

import sprites from '../../../public/assets/svg/sprites.svg';
import cn from 'classnames';
import styles from './Icon.module.scss';

// * Add new icon if it was added into file sprites.svg
type IconType = 'instagram' | 'facebook' | 'twitter';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

const Icon = ({ icon, size = 24, color = 'currentColor', className, ...restProps }: IconProps) => {
  const classNames = useMemo(() => cn(styles.icon, className), [className]);

  return (
    <svg width={size} height={size} fill={color} className={classNames} {...restProps}>
      <use href={`${sprites}#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
