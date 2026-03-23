import { HamburgerIcon, Lightbulb, Menu } from "lucide-react";

type Navlink = {
  id: number;
  name: string;
  section: string;
};

const LINKS: Navlink[] = [
  { id: 1, name: "Ferramentas", section: "#features" },
  { id: 2, name: "Preços", section: "#pricing" },
  { id: 3, name: "Testemunhos", section: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2  bg-primary/75 text-white px-4 py-5 w-[90%] rounded-2xl z-50 backdrop-blur-xl border-b-2 border-b-primary">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Lightbulb size={24} className="text-secundary" />
          <div className="text-xl">
            Lumina <span className="text-secundary">AI</span>
          </div>
        </div>
        <nav className="hidden">
          <ul className="flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={link.section}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button>
          <Menu />
        </button>
      </div>
    </header>
  );
}
