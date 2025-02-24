import MoviePlot from "../Components/movieplot";

export default function MoviePlots() {
  const dummyMovies = [
    {
      title: "Attack of the Giant Spaghetti Monster",
      description: "A giant spaghetti monster from space attacks Earth. Only a chef with the secret sauce can stop it!",
      genre: "Comedy/Sci-Fi"
    },
    {
      title: "The Haunted Toaster",
      description: "A possessed toaster starts making ghostly burnt messages. Chaos ensues.",
      genre: "Horror/Comedy"
    },
    {
      title: "Superhero Grandma",
      description: "A retired grandma gains superpowers from her knitting needles and fights crime in her neighborhood.",
      genre: "Action/Comedy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Ridiculous Movie Plots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyMovies.map((movie, index) => (
          <MoviePlot key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}
