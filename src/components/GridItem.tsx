import { Bird } from "../data/bird";

export default function GridItem({ name, detail, image, audio }: Bird) {
  return (
    <li key={name} className="relative">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover pointer-events-none group-hover:opacity-75"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">Play audio for {name}</span>
        </button>
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {name}
      </p>
      <p className="block text-sm font-medium text-gray-500 hover:text-gray-700 pointer-events-none">
        <a href={detail}>詳細</a>
      </p>
    </li>
  );
}
