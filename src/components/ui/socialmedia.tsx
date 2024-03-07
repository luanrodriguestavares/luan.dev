import React from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialMediaProps {
  name: string;
  icon: React.ReactNode; 
  tooltip: string;
  color: string;
  hoverColor: string;
  url: string; 
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  icon,
  tooltip,
  color,
  hoverColor,
  url,
}) => {
  const handleButtonClick = () => {
    window.open(url, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={`rounded-full p-2 ${color} ${hoverColor}`}
            variant="outline"
            onClick={handleButtonClick}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialMedia;
