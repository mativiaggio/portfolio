import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <br />
      <div className="px-4 py-2 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between bg-black rounded-md p-4 min-h-[10vh]">
          <p className="text-primary text-white text-2xl font-bold">
            2+ Years <br /> of Experience
          </p>
          <p className="text-primary text-white text-2xl font-bold">
            8+ Done <br /> Courses
          </p>
          <p className="text-primary text-white text-2xl font-bold">
            2+ Years <br /> of Experience
          </p>
        </div>
      </div>
    </>
  );
}
