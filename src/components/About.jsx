export default function About() {
  return (
    <section className="py-24 bg-neutral-800/95" id="about">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">
          About <span className="text-red-400">Me</span>
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Software Engineer with {" "} <span className="text-white">3+</span> years of experience building and owning
          production-grade web systems in enterprise environments.
          <br/>
          {" "}
          <span className="text-white">Published technical author</span>{" "}
          with a strong interest in AI/ML and
          a solid foundation in data structures, algorithms, system design
          <br/>
          and engineering fundamentals.

        </p>
      </div>
    </section>
  );
}

