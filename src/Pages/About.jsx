// src/pages/About.jsx
export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
        Codex Academy
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6">
        Codex Academy exists to bring together curious, creative, and
        forward‑thinking people who believe in the power of ideas to make life
        better. Our mission is to create a space where innovation and optimism
        thrive side by side — a community where you can share insights, build
        collaborations, and help others turn inspiration into action.
      </p>
      <p className="mb-8">
        We believe progress starts with connection: each conversation, each
        project, and each piece of encouragement strengthens a network of people
        determined to think positively and build a better world.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Community Principles</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <span className="font-semibold">Positivity First —</span> Every
          discussion should uplift, encourage, or constructively challenge. We
          grow through curiosity and empathy.
        </li>
        <li>
          <span className="font-semibold">Ideas, Not Egos —</span> Respectful
          debate and shared creativity make ideas stronger. Disagreement is
          welcome; disrespect is not.
        </li>
        <li>
          <span className="font-semibold">Collaboration Over Competition —</span>{" "}
          We celebrate collective innovation — sharing skills, feedback, and
          opportunities helps everyone succeed.
        </li>
        <li>
          <span className="font-semibold">Authenticity Matters —</span> Be
          genuine about who you are, what you do, and what you believe.
          Transparency builds trust.
        </li>
        <li>
          <span className="font-semibold">Accountability & Integrity —</span> 
          Give credit generously, protect others’ privacy, and hold yourself to
          the standards you expect from the community.
        </li>
        <li>
          <span className="font-semibold">Continuous Growth —</span> Treat
          Codex Academy as a laboratory for kindness and creativity — a place
          where learning, mentoring, and imagination never stop.
        </li>
      </ul>

      <footer className="mt-10 text-center text-sm text-gray-500">
        © 2026 Christina Ortiz and Codex Academy. All Rights Reserved.
      </footer>
    </div>
  );
}
