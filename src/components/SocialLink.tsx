
import { ReactElement } from 'react';

interface SocialLinkProps {
  name: string;
  icon: ReactElement;
  url: string;
  color: string;
  textColor?: string;
}

const SocialLink = ({ name, icon, url, color, textColor = 'text-white' }: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-md font-semibold transition-opacity hover:opacity-90 ${color} ${textColor}`}
    >
      {icon}
      <span>{name}</span>
    </a>
  );
};

export default SocialLink;
