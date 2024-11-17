import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[300px] max-w-xl mt-1 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3192.348618064584!2d-4.393138868024681!3d40.358805804357004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41b31691989f07%3A0x8ffb36e9dc4d0dcc!2sMaestros%20Tapiceros!5e1!3m2!1ses!2sus!4v1730950723184!5m2!1ses!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Maestros Tapiceros en Google Maps"
      />
    </div>
  );
};

export default GoogleMap;
