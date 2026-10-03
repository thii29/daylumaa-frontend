interface SkeletonLoaderProps {
  type: 'card' | 'list' | 'form' | 'text';
  count?: number;
}

const SkeletonLoader = ({ type, count = 1 }: SkeletonLoaderProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-ink-200 rounded-lg"></div>
            <div className="h-4 bg-ink-200 w-3/4"></div>
            <div className="h-4 bg-ink-200 w-1/2"></div>
          </div>
        );
      case 'list':
        return (
          <div className="space-y-3">
            {Array(count)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-12 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
          </div>
        );
      case 'form':
        return (
          <div className="space-y-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
          </div>
        );
      case 'text':
        return (
          <div className="space-y-2">
            {Array(count)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
          </div>
        );
    }
  };
  return (
    <div role="status" aria-label="Loading">
      {renderSkeleton()}
    </div>
  );
};

export default SkeletonLoader;
