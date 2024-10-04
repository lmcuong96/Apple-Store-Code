export default function Layout({ title, children }) {
  return (
    <div className="text-center ">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </div>
  );
}
