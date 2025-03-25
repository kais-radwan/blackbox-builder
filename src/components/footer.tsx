import { DIcons } from "dicons";
import { Logo } from "./logo";

const navigation = {
  categories: [
    {
      id: "company",
      name: "Company",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "Blog", href: "/blog" },
            { name: "About", href: "/support" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "AI Chat", href: "/dashboard" },
            { name: "Front-end Builder", href: "/products" },
            { name: "Full-stack Builder", href: "/agency" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Extensions", href: "/products/dicons" },
            { name: "VSCode Agent", href: "/products/dshapes" },
            { name: "Web IDE", href: "/products/graaadients" },
          ],
        },
        {
          id: "docs",
          name: "Docs",
          items: [
            { name: "Docs", href: "/designs" },
            { name: "Performance", href: "/components" },
            { name: "Support", href: "/blogs" },
          ],
        },
        {
          id: "other",
          name: "Others",
          items: [
            { name: "Android App", href: "/graphic" },
            { name: "iOS App", href: "/products/3dicons" },
            { name: "Website", href: "/products/colors/generate" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "/contact" },
            { name: "Terms", href: "/terms" },
            { name: "Privacy", href: "/privacy" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-[#222] border-dotted rounded-xl p-2.5 transition-transform `;

export function Footer() {
  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-t border-[#222] px-2 md:px-36">
      <div className="relative mx-auto grid  max-w-7xl items-center justify-center gap-36 p-10 pb-0 md:flex ">
        <a
          href="/"
          className="flex items-center justify-center min-w-max font-semibold gap-2"
        >
          <Logo />
          <p>BLACKBOX</p>
        </a>
        <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
          BLACKBOX is a software company that provides AI tools to automate
          software development and power developers to build faster
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-[#222]"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="text-sm opacity-70 hover:opacity-100 md:text-xs"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-[#222]"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <a
            aria-label="Logo"
            href="mailto:contact@designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://x.com/designali_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://www.instagram.com/designali.in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://www.threads.net/designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Threads className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://www.behance.net/designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Behance className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://www.facebook.com/designali.agency"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </a>
          <a
            aria-label="Logo"
            href="https://www.youtube.com/@designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl pb-24">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with love by BLACKBOX team - All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
