export default function ShopBanner({ banner }) {
  return (
    <div className="bg-gray-300 h-40 items-center flex italic my-4 justify-center">
      <div className=" flex justify-between w-full mx-10 ">
        <h1 className="text-4xl">{banner}</h1>
        <p className="text-gray-400 font-medium">{banner}</p>
      </div>
    </div>
  );
}
