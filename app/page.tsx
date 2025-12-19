import Image from "next/image";

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-500"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-dvh w-full overflow-hidden bg-[#F8F7F4] text-[#1a1a1a]">
      {/* Left Panel - Fixed Information */}
      <div className="w-full lg:w-[45%] lg:h-full flex flex-col justify-between p-8 lg:p-16 shrink-0 relative z-10">
        {/* Logo Area */}
        <div className="flex flex-col items-center lg:items-center pt-8 lg:pt-0">
          <h1 className="font-serif text-5xl font-black tracking-tight text-[#5C6138]">
            after
          </h1>
          <div className="h-8 w-[1px] bg-gray-400 mt-6 mb-6"></div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 max-w-lg mx-auto text-center">
          <p className="text-xl font-medium leading-relaxed">
            Our goal is to design products for users and business goals & recognizable brands.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We work with good people who want to build and grow cool stuff.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We are not here to do &quot;quick work&quot; and move on. We care about
            your vision, values, and business goals, and we want our designs
            to represent that.
          </p>
          <p className="text-base text-gray-600 mt-2">
            Team of 2. Product designer (10+ yrs) & brand designer (13+ yrs).
          </p>

          <div className="mt-6 space-y-1">
            <p className="font-semibold text-lg">
              Ongoing design work: starts at <span className="text-black">$7k/month</span>
            </p>
            <p className="font-semibold text-lg">
              Fixed-time projects: starts at <span className="text-black">$6k</span>
            </p>
          </div>
          
           <div className="h-8 w-[1px] bg-gray-400 mx-auto mt-2"></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pb-8 lg:pb-0">
          <button className="bg-[#6B7043] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5a5e3a] transition-colors duration-200 ease-out cursor-pointer shadow-sm">
            Book a call
          </button>
          <button className="bg-[#EBEAE6] text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#dedcd6] transition-colors duration-200 ease-out cursor-pointer shadow-sm">
            <ChatIcon /> Chat
          </button>
        </div>
      </div>

      {/* Right Panel - Scrollable Work Showcase */}
      <div className="w-full lg:flex-1 h-full overflow-y-auto bg-[#F8F7F4] scrollbar-hide">
        <div className="p-4 lg:p-6 space-y-6">
          {/* Card 1: Lucide Icons clone */}
          <div className="bg-white rounded-[2rem] p-12 shadow-sm min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-md transition-shadow duration-200 ease-out">
            <div className="absolute top-8 left-8 flex items-center gap-2 text-orange-500 font-semibold">
              <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
              lucide-icons
            </div>
            
            <div className="max-w-2xl text-center z-10">
              <h2 className="text-4xl font-semibold mb-4 tracking-tight">Beautifully crafted animated icons</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
                An open-source (MIT License) collection of smooth animated icons for your projects.
              </p>
              
              <div className="grid grid-cols-4 gap-4 mt-12 w-full max-w-lg mx-auto opacity-80">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                       <div className="w-6 h-6 border-2 border-gray-800 rounded-full"></div>
                    </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Card 2: Abstract/Technical */}
          <div className="bg-[#EAEAEA] rounded-[2rem] p-12 shadow-sm min-h-[700px] flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-md transition-shadow duration-200 ease-out">
             <div className="grid grid-cols-2 gap-16 w-full max-w-3xl">
                {/* Abstract visual elements representing the reference image */}
                <div className="col-span-1 h-48 border border-gray-400 rounded-full flex items-center justify-center relative">
                   <div className="absolute inset-0 border border-gray-400 rounded-full transform scale-x-50"></div>
                   <div className="absolute inset-0 border border-gray-400 rounded-full transform scale-x-10"></div>
                </div>
                <div className="col-span-1 h-48 border-l-2 border-r-2 border-gray-400 rounded-full flex items-center justify-center">
                   <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                </div>
                
                <div className="col-span-2 flex justify-center py-12">
                   <div className="text-4xl font-light tracking-widest text-gray-500">DISCOVER</div>
                </div>

                <div className="col-span-1 flex justify-center">
                   <div className="w-32 h-32 border border-gray-400 transform rotate-45 flex items-center justify-center">
                      <div className="w-20 h-20 border border-gray-400"></div>
                   </div>
                </div>
                <div className="col-span-1 flex justify-center">
                   <div className="bg-[#4a4a4a] text-white p-4 w-24 h-24 flex items-center justify-center text-xl font-bold rounded-sm">01</div>
                </div>
             </div>
          </div>

          {/* Card 3: Placeholder for more work */}
          <div className="bg-white rounded-[2rem] p-12 shadow-sm min-h-[600px] flex items-center justify-center group hover:shadow-md transition-shadow duration-200 ease-out">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">More Projects</h3>
              <p className="text-gray-500">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
