import { Check, Crown } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 text-center px-8 text-white">
      <h2 className="text-4xl font-bold mb-4">Nossos preços.</h2>

      <p className="mb-16">
        Nossa missão é fazer com que o aprendizado e conhecimento seja acessivel
        para todos.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* FREE PLAN */}

        <div className="bg-slate-900 p-10 rounded-xl border border-slate-800">
          <h3 className="text-xl font-semibold mb-4">Plano estudante</h3>

          <p className="text-4xl font-bold mb-6">R$0</p>

          <ul className="text-white space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2">
              <Check />
              Explicações ilimitadas da IA
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Questões geradas de forma ilimitada
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Gerador de plano de estudos dedicado e adaptado
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Simulados e provas
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Acompanhamento do desempenho
            </li>
          </ul>

          <button className="text-black w-full bg-white py-3 rounded-lg hover:bg-purple-400 hover:text-white cursor-pointer">
            Comece agora
          </button>
        </div>

        {/* PRO PLAN */}

        <div className="text-black bg-purple-500 p-10 rounded-xl border border-purple-400 scale-110">
          <h3 className="text-xl font-semibold mb-4 flex flex-col items-center">
            <Crown color="yellow" size={30} />
            Lumina Pro
          </h3>

          <p className="text-4xl font-bold mb-6">R$5/mês</p>

          <ul className="space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2">
              <Check />
              Tudo de graça
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Explicações um pouco mais avançadas
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Análise mais profundas sobre as provas
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Simulados ilimitados
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Prioridade no suporte
            </li>
          </ul>

          <button className="w-full bg-white text-black py-3 rounded-lg cursor-pointer hover:bg-slate-900 hover:text-white">
            Suba o nível
          </button>
        </div>

        {/* BUSINESS */}

        <div className="bg-slate-900 p-10 rounded-xl border border-slate-800">
          <h3 className="text-xl font-semibold mb-4">Plano de instituição</h3>

          <p className="text-4xl font-bold mb-6">A combinar</p>

          <ul className="text-white space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2">
              <Check />
              Escolas e universidades
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Ferramentas de tarefas para turma
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Feedback do desenpenho dos alunos
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Performance do estudante detalhada
            </li>
            <li className="flex items-center gap-2">
              <Check />
              Suporte dedicado
            </li>
          </ul>

          <button className="text-black w-full bg-white py-3 rounded-lg hover:bg-purple-400 hover:text-white cursor-pointer">
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
}
