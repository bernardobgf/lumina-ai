import { Lightbulb } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <Lightbulb className="text-white h-6 w-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium space-x-2">
              <span className="text-white">Lumina</span>
              <span className="text-purple-400">AI</span>
            </span>
          </div>

          {/* Navlinks */}
          <div className="md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-white hover:text-purple-400 text-sm lg:text-lg"
            >
              Ferramentas
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-purple-400 text-sm lg:text-lg"
            >
              Preços
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-purple-400 text-sm lg:text-lg"
            >
              Avaliações
            </a>
            <button className="text-black cursor-pointer px-3 py-2 bg-purple-400 rounded-xl hover:bg-purple-600 hover:text-white">
              Entrar/Cadastrar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
