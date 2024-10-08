export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
    </div>
  );
}
