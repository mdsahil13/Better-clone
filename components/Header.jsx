import Link from "next/link";
import { useRouter } from "next/router";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/mortgage-calculator", label: "Mortgage Calculator" },
  { href: "/start", label: "Start" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-betterGreen  shadow-sm sticky top-0 z-30">
      <div className="container flex items-center justify-between py-4 px-6 mx-auto">
        <div className="text-2xl font-semibold text-white">Better</div>
        <nav className="hidden md:flex space-x-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              <span
                className={`py-1 px-2 ${
                  router.pathname === n.href
                    ? "text-betterBlue font-semibold"
                    : "text-gray-700"
                }`}
              >
                {n.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
