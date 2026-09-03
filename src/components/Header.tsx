import Link from "next/link";

const sections = [
  { href: "/check-in", label: "Check-In" },
  { href: "/schedule", label: "Schedule" },
  { href: "/meals", label: "Meals" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold">
          RoseHack
        </Link>
        <ul className="flex gap-6 text-sm">
          {sections.map((section) => (
            <li key={section.href}>
              <Link href={section.href} className="text-gray-600 hover:text-black">
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
