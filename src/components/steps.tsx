import { motion } from "framer-motion";
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Mobile Apps",
      image:
        "https://cdn.dribbble.com/userupload/42654841/file/original-682e4d917da14b2132751caecaada44d.png?resize=1024x768&vertical=center",
    },
    {
      label: "Games",
      image: "/any-game-1.png",
    },
    {
      label: "Landing Pages",
      image:
        "https://cdn.dribbble.com/userupload/16289272/file/original-a9822c9c6282bebdf84509657f0362cf.png?resize=1024x768&vertical=center",
    },
    {
      label: "Dashboards",
      image:
        "https://cdn.dribbble.com/userupload/17299496/file/original-44214a4ccaa445d1b78f0b89935c9340.png?resize=1024x768&vertical=center",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 mb-8 w-full overflow-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-none transition-colors w-full min-w-max ${
              activeTab === index
                ? "bg-[#222]/50 text-white"
                : "bg-transparent text-[#444] hover:bg-[#111]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl overflow-hidden flex items-center justify-center relative"
      >
        <img
          src={tabs[activeTab].image}
          alt={tabs[activeTab].label}
          className="w-full h-auto object-cover absolute bottom-0 left-0"
        />
        <img
          src={tabs[0].image}
          alt={tabs[activeTab].label}
          className="w-full h-auto object-cover opacity-0"
        />
      </motion.div>
    </div>
  );
}

export function Steps() {
  return (
    <div className="w-full border-b flex items-start justify-center border-[#222] relative overflow-hidden mt-24">
      <div className="min-w-[80%] max-w-[80%] flex flex-col lg:flex-row items-center justify-center lg:gap-12">
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 leading-tight"
        >
          Build Whatever You Want
        </motion.h2>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Tabs />
        </motion.div>
      </div>

      <div className="absolute w-full h-48 bg-gradient-to-b from-transparent via-black/60 to-black z-20 left-0 bottom-0"></div>
    </div>
  );
}
