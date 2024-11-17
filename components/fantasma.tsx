import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon: Icon,
  size = 24,
  color = "#5c4033",
}) => {
  return (
    <div className="animate-float">
      <Icon className="mx-auto mb-8" size={size} color={color} />
    </div>
  );
};
