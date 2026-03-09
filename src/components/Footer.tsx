export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 text-center">
      <p className="text-white max-w-xl mx-auto">
        Lumina iluminando seu caminho.
      </p>

      <p className="text-white mt-6 text-sm">
        © {new Date().getFullYear()} Lumina AI
      </p>
    </footer>
  );
}
