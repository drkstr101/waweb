import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
    >
      {children}
    </Link>
  );
}
