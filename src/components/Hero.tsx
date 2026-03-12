import { motion } from "framer-motion";
import Lumina from "../public/DemoLumina.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-40">
      {/* Lado esquerdo: texto + botão */}
      <div className="max-w-lg space-y-6">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Melhor <span className="text-purple-400">IA</span> para estudantes
        </motion.h1>

        <motion.p
          className="text-white text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforme seus treinos com inteligência artificial personalizada para
          seus objetivos.
        </motion.p>

        <a href="#pricing">
          <motion.button
            className="bg-purple-400 text-black px-8 py-4 rounded-xl hover:bg-purple-600 hover:text-white cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Comece Agora
          </motion.button>
        </a>
      </div>

      {/* Lado direito: imagens de baixo pra cima */}
      <div className="relative w-125 h-125 md:w-150 md:h-150">
        {/* Imagem de trás (mais alta) */}
        <motion.img
          src={Lumina}
          alt="Imagem 3"
          className="absolute bottom-40 left-40 w-200 h-100 object-cover rounded-xl  opacity-60 z-10 blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Imagem do meio */}
        <motion.img
          src={Lumina}
          alt="Imagem 2"
          className="absolute bottom-20 left-20 w-200 h-100 object-cover rounded-xl opacity-80 z-20 blur-xs"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Imagem da frente (embaixo) */}
        <motion.img
          src={Lumina}
          alt="Imagem 1"
          className="absolute bottom-0 left-0 w-200 h-100 object-cover rounded-xl z-30 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
