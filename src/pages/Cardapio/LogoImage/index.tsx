import React from 'react';

interface LogoImageProps {
  src: string;
  alt: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="header-image" />;
};

export default LogoImage;