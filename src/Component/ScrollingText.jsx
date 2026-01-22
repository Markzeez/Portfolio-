// components/ScrollingText.jsx


const techWords = [
  "REACT",
  "NEXT.JS",
  "GSAP",
  "ASTRO",
  "VITE",
  "TAILWINDCSS",
  "THREE.JS",
  "TYPESCRIPT",
];

const colors = [
  "text-blue-500",
  "text-purple-500",
  "text-green-500",
  "text-pink-500",
  "text-yellow-500",
  "text-indigo-500",
  "text-red-500",
  "text-teal-500",
];

// eslint-disable-next-line react/prop-types
function ScrollingText({ direction = "left" }) {
  const rowContent = techWords.map((word, index) => (
    <span
      key={index}
      className={`px-4 font-bold text-4xl tracking-wide ${colors[index % colors.length]}`}
    >
      • {word}
    </span>
  ));

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-4">
      <div
        className={`inline-block ${
          direction === "left" ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {rowContent}
        {rowContent}
      </div>
    </div>
  );
}

export default ScrollingText;