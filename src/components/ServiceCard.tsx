import React, { useRef, useState } from "react";

export const ServiceCard = ({ service }: { service: any }) => {
    // State
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);
    
    // Ref
    const ref = useRef<HTMLDivElement | null>(null);
    
    // Mouse tracking
    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const r = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };


  return (
    <>
      {/* ================= Card Container ================= */}
      <div
        ref={ref}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onMouseMove={onMove}
        className="
          relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-lg shadow-gray-200/60 dark:shadow-none
        "
      >
        {/* ================= Border Glow Effect ================= */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-200"
          style={{
            opacity: active ? 1 : 0,
            padding: "1px",
            background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px,
              rgba(99,102,241,0.95),
              rgba(99,102,241,0.35) 35%,
              transparent 65%)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* ================= Inner Glow ================= */}
        <div
          className="pointer-events-none absolute z-0 w-[300px] h-[300px] rounded-full blur-2xl
                     bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                     transition-opacity duration-200 mix-blend-lighten"
          style={{
            opacity: active ? 0.55 : 0,
            top: pos.y - 150,
            left: pos.x - 150,
          }}
        />

        {/* ================= Card Content ================= */}
        <div className="relative z-10 flex items-center gap-10 p-8 rounded-[10px]">
          {/* Icon */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
            <img
              src={service.icon}
              alt={service.title}
              className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
