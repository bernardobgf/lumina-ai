export default function Testimonials() {
  const reviews = [
    {
      name: "Ana Silva",
      text: "Lumina me ajudou a entender melhor matemática e fisíca para me preparar pro vestibular.",
    },
    {
      name: "Lucas Pereira",
      text: "Estava com muitas dificuldades em humanas no ensino médio, mas graças a Lumina eu consegui aprender finalmente.",
    },
    {
      name: "Mariana Costa",
      text: "As matérias na faculdade nunca foram tao tranquilas.",
    },
  ];

  return (
    <section id="testimonials" className="py-28 px-8">
      <h2 className="text-white text-4xl font-bold text-center mb-16">
        Estudantes amam Lumina.
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <p className="text-white mb-6">"{r.text}"</p>

            <span className="text-purple-400 font-bold">{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
