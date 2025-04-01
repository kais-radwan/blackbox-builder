"use client";

import { useState } from "react";
import { Badge } from "./badge";
import { cn } from "../../lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  name: string;
  description: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: Feature[];
  highlight?: boolean;
  badge?: string;
  icon: React.ReactNode;
}

interface PricingSectionProps {
  tiers: PricingTier[];
  className?: string;
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const [isYearly, _setIsYearly] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const badgeStyles = cn(
    "px-4 py-1.5 text-xs font-medium",
    "bg-[#090909] border border-white/20",
    "shadow-lg rounded-lg",
  );

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden z-20",
        className,
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight mb-12">
            Simple, transparent pricing
          </h2>
          {/* <div className="inline-flex items-center p-1.5 bg-white dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">
            {["Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer",
                  (period === "Yearly") === isYearly
                    ? "bg-[#222] text-white shadow-lg"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
                )}
              >
                {period}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                tier.highlight
                  ? "bg-gradient-to-b from-zinc-100/80 to-transparent dark:from-zinc-400/[0.15]"
                  : "bg-white dark:bg-zinc-800/50",
                "border",
                tier.highlight
                  ? "border-zinc-400/50 dark:border-zinc-400/20 shadow-xl"
                  : "border-zinc-200 dark:border-zinc-700 shadow-md",
                "hover:translate-y-0 hover:shadow-lg",
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-6">
                  <Badge
                    className={badgeStyles}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl border border-white/20 ",
                      tier.highlight
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="opacity-70">{tier.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4">
                      <div
                        className={cn(
                          "mt-1 p-0.5 rounded-full transition-colors duration-200",
                          feature.included
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-zinc-400 dark:text-zinc-600",
                        )}
                      >
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {feature.name}
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  className={cn(
                    "p-2 px-4 font-medium border z-20 border-white rounded-lg transition-all duration-500 cursor-pointer hover:translate-y-[1px] relative overflow-hidden flex items-center gap-2 max-w-max",
                    tier.highlight
                      ? "bg-white/80 text-black"
                      : "bg-transparent text-white border-white/20",
                  )}
                  style={
                    !buttonHovered
                      ? {
                          boxShadow: "0px 4px 0px 0px rgba(255, 255, 255, 0.2)",
                          transition: "box-shadow 0.2s",
                        }
                      : {
                          boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.2)",
                          transition: "box-shadow 0.2s",
                        }
                  }
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {tier.highlight ? (
                      <>
                        Buy now
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Get started
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </span>

                  <motion.div
                    initial={{ x: -50, opacity: 0, filter: "blur(20px)" }}
                    animate={
                      buttonHovered
                        ? { x: 0, opacity: 0.7, filter: "blur(5px)" }
                        : { x: -50, opacity: 0, filter: "blur(20px)" }
                    }
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "h-64 absolute -top-10 rotate-12 blur-sm w-4",
                      tier.highlight ? "bg-white" : "bg-white/10",
                    )}
                  ></motion.div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
