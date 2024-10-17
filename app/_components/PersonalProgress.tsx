const PersonalProgress = () => {
  return (
    <div className="pt-6">
      <div className="flex justify-between bg-workspace-accent rounded-md p-4 min-h-[10vh]">
        <div className="text-primary text-white text-base sm:text-2xl font-bold w-1/3 text-center flex justify-center items-center border-r border-[#f4f4f5]">
          <p className="text-center">
            2+ Years <br /> of Experience
          </p>
        </div>
        <div className="text-primary text-white text-base sm:text-2xl font-bold w-1/3 text-center flex justify-center items-center border-r border-[#f4f4f5]">
          <p className="text-center">
            7+ Courses <br /> Accomplished
          </p>
        </div>
        <div className="text-primary text-white text-base sm:text-2xl font-bold w-1/3 text-center flex justify-center items-center">
          <p className="text-center">
            34% Degree <br /> Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalProgress;
