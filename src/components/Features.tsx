import { motion } from "framer-motion";

const features = [
  {
    title: "Criação de Provas Personalizadas",
    desc: "Gera exames e exercícios de acordo com o conteúdo que o estudante quer praticar, adaptados para ensino médio, vestibular ou universitário.",
  },
  {
    title: "Banco de Questões Inteligente",
    desc: "Analisa provas passadas do ENEM, UFSC e outros vestibulares para criar questões realistas e diversificadas.",
  },
  {
    title: "Explicações Detalhadas",
    desc: "Oferece respostas passo a passo, desde explicações simples até aprofundadas, para facilitar o entendimento de qualquer assunto.",
  },
  {
    title: "Planos de Estudo Personalizados",
    desc: "Organiza a rotina do estudante com base nos objetivos, nível de conhecimento e tempo disponível, criando uma jornada eficiente de aprendizado.",
  },
  {
    title: "Acesso Gratuito e Inclusivo",
    desc: "Disponível para todos os estudantes, sem necessidade de pagar cursinhos caros, democratizando o acesso à educação de qualidade.",
  },
  {
    title: "Interface Interativa e Visual",
    desc: "Painel moderno com chat simulado, vídeos explicativos e recursos visuais que tornam o estudo mais intuitivo e motivador.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-8 max-w-6xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center mb-16">
        Tudo que nós oferecemos para você.
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 p-8 rounded-xl border border-slate-800"
          >
            <h3 className="text-purple-400 text-xl font-semibold mb-4">
              {f.title}
            </h3>

            <p className="text-white">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
