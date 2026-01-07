const Shimmer = () => {
  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {Array(24)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-64 h-72 rounded-xl bg-gray-200 overflow-hidden relative"
            >
              {/* Image shimmer */}
              <div className="h-40 bg-gray-300 animate-pulse"></div>

              {/* Content shimmer */}
              <div className="p-3 space-y-2">
                <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-3 w-1/2 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
