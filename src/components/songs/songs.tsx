import React from 'react';
import { useTheme } from "@/components/ui/theme-provider";

const Song = ({ trackId }: { trackId: string }) => {
  const { theme } = useTheme();

  const iframeStyle: React.CSSProperties = {
    borderRadius: '12px',
  };

  const themeQueryParam = theme === 'light' ? '' : '&theme=0';

  return (
    <iframe
      key={trackId}
      style={iframeStyle}
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator${themeQueryParam}`}
      width="100%"
      height="100"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default React.memo(Song);