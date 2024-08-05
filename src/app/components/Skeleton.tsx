const Skeleton = ({ width, height }: { width: string; height: string }) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
