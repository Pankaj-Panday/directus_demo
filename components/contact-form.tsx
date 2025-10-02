"use client";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    console.log("Form submitted:", { name, email, message });
    alert("Form submitted! Check console.");

    form.reset();
  };

  return (
    <section className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-2xl">
      <h2 className="mb-4 font-bold text-2xl">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition">
          Submit
        </button>
      </form>
    </section>
  );
};
