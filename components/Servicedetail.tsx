import Image from "next/image";
import React from "react";

interface ServiceDetailProps {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}

export function ServiceDetail({
  title,
  description,
  longDescription,
  image,
  icon,
  isReversed = false,
}: ServiceDetailProps) {
  return (
    <div
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
    >
      <div className="w-full lg:w-1/2">
        <div className="group relative aspect-[4/3] h-[600px] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center">
            {React.cloneElement(icon as React.ReactElement, {
              className: "w-8 h-8 text-cafeclaro",
            })}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{longDescription}</p>
      </div>
    </div>
  );
}
