export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const navLinks = [
    { label: "Shop", href: "#" },
    { label: "On Sale", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Brands", href: "#" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClick}
          className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
