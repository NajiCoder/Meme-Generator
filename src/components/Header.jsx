export default function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-purple-800 p-5 text-white">
      <img
        src="./lauging-meme.jpg"
        alt="Lauging-meme-face"
        className="h-full mr-2"
      />
      <h2 className="font-serif font-bold text-sm leading-6 tracking-tight mr-auto">
        Meme generator
      </h2>
      <h4 className="font-medium text-xs">
        React Course - Meme Generator Project
      </h4>
    </header>
  );
}
