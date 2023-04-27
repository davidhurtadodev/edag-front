export default function Grid({ children }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
