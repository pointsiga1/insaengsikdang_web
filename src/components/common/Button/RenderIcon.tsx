import Buy from '@assets/icons/button/buy.svg?react';
import Present from '@assets/icons/button/present.svg?react';
import Shopping from '@assets/icons/button/shopping.svg?react';
import Bell from '@assets/icons/button/bell.svg?react';

export type IconProps = 'buy' | 'present' | 'shopping' | 'bell';

interface IconType {
  icon: IconProps | undefined;
}

export default function RenderIcon({ icon }: IconType) {
  switch (icon) {
    case 'buy':
      return <Buy />;
    case 'present':
      return <Present />;
    case 'shopping':
      return <Shopping />;
    case 'bell':
      return <Bell />;
    default:
      return null;
  }
}
