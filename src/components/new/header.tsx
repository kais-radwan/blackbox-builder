import { useState } from "react";
import { NewLogo } from "./logo";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const links = [
  { name: "Blog", href: "/blog" },
  { name: "Docs", href: "/docs" },
  { name: "Updates", href: "/updates" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
];

export function NewHeader() {
  const [loginHovered, setLoginHovered] = useState(false);
  const [signupHovered, setSignupHovered] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-[4.5rem] border-b flex items-center justify-center border-white/20 z-50">
      <div className="w-full md:max-w-[80%] px-4 md:px-0 flex items-center justify-between h-full bg-black/60 backdrop-blur-sm">
        <div className="flex items-center gap-12">
          <a href="/">
            <NewLogo />
          </a>

          <div className="hidden md:flex items-center pl-2 gap-6 text-sm">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onMouseEnter={() => setLoginHovered(true)}
            onMouseLeave={() => setLoginHovered(false)}
            className={cn(
              "hidden md:flex p-2 px-4 text-sm font-medium bg-white/5 border border-white/10 rounded-lg transition-all duration-500 cursor-pointer hover:translate-y-[1px] hover:border-white/20"
            )}
            style={
              !loginHovered
                ? {
                    boxShadow: "0px 4px 0px 0px rgba(255, 255, 255, 0.1)",
                    transition: "box-shadow 0.2s",
                  }
                : {
                    boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.1)",
                    transition: "box-shadow 0.2s",
                  }
            }
          >
            Sign in
          </button>

          <button
            onMouseEnter={() => setSignupHovered(true)}
            onMouseLeave={() => setSignupHovered(false)}
            className={cn(
              "p-2 px-4 text-sm font-medium bg-white/80 border border-white text-black rounded-lg transition-all duration-500 cursor-pointer hover:translate-y-[1px] relative overflow-hidden"
            )}
            style={
              !signupHovered
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
            Sign up
            <motion.div
              initial={{ x: -50, opacity: 0, filter: "blur(20px)" }}
              animate={
                signupHovered
                  ? { x: 0, opacity: 0.7, filter: "blur(5px)" }
                  : { x: -50, opacity: 0, filter: "blur(20px)" }
              }
              transition={{ duration: 0.5 }}
              className="h-64 absolute -top-10 rotate-12 bg-white blur-sm w-4"
            ></motion.div>
          </button>
        </div>
      </div>
    </div>
  );
}
