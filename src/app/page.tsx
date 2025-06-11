export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#a2d2ff]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Welcome to <span className="text-blue-500">MyDentalFly</span>
        </h1>
        <p className="text-2xl text-black">The stable foundation is built. Let's begin.</p>
      </div>
    </main>
  );
}