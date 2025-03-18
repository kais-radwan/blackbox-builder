import { Logo } from "./logo";

const links = ["Features", "Resources", "Help", "Enterprise", "Pricing"];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center px-4 md:px-12 justify-between z-50 bg-black">
      <a href="/" className="flex items-center gap-2 w-42">
        <Logo />
        <div className="font-bold">BLACKBOX</div>
      </a>
      <div className="hidden md:flex items-center justify-center gap-6">
        {links.map((link, index) => (
          <a
            href="#"
            key={`link-${index}`}
            className="text-sm opacity-60 hover:opacity-100 transition-all duration-500"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 w-42 justify-end">
        <button className="p-2 text-sm px-4 bg-white text-black cursor-pointer hover:opacity-80 transition-all duration-500">
          Sign up
        </button>
      </div>
    </header>
  );
}
