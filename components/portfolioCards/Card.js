import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

let client = createClient({
  projectId: "ovfw6pap",
  dataset: "production",
  apiVersion: "2022-12-29",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Card = (project) => {
    const { title, description, link, name } = project;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        className="w-full h-64 object-cover"
        src={urlFor(project.image).url()}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link href={link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project
        </Link>
      </div>
    </div>
  );
};

export default Card;
