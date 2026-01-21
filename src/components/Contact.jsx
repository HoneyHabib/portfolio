export default function Contact() {
  return (
    <section className="py-24 bg-neutral-800" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Get In Touch
        </h2>

        <p className="mt-4 text-gray-400">
          Interested in working together or just want to say hi?
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=honeyhabib.habib@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
           className="inline-block mt-8 px-8 py-3 bg-red-400 text-black font-semibold rounded-lg hover:scale-105 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
