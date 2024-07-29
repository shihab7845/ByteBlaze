import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { cover_image, title, published_at, description, id } = blog;
  
  return (
    <div className="transition hover:scale-105 hover:border-2 hover:border-secondary  max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        className="block"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image}
          alt={title}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
