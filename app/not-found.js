import Quote from './components/ui/Quote';

function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2">
      <div className="text-gray-400">
        <h1 className="font-semibold text-4xl text-orange-400 mb-10">
          404 Not Found
        </h1>
        <Quote />
      </div>
    </div>
  );
}
export default NotFound;
