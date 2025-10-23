import RatingStars from "./../RatingStars";

type reviewProps = {
  author: string;
  content: string;
  date?: string;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `Posted on ${date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}

export default function Review({ author, content, date = "" }: reviewProps) {
  return (
    <div className="h-full flex flex-col bg-white border rounded-[1.25rem] p-6 shadow-md">
      <div className="mb-3">
        <RatingStars rating={5} isText={false} className="mb-4" />
        <h3 className="font-semibold flex gap-x-2 text-lg text-gray-800">
          {author}
          <img src="/icons/checkMark.svg" alt="verified" />
        </h3>
      </div>
      <p className="text-gray-600 text-sm mt-auto">{content}</p>
      {date && <p className="text-sm mt-6 text-gray-500">{formatDate(date)}</p>}
    </div>
  );
}
