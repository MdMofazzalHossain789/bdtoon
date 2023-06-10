import Link from "next/link";

export default function Button({ path, title = "Button", IconComponent }) {
  return (
    <Link href={path}>
      <div>{IconComponent}</div>
      <p>{title}</p>
    </Link>
  );
}
