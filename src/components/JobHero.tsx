// import { Button } from "@/components/ui/button";

// export const JobHero = () => {
//   const scrollToApplication = () => {
//     document.getElementById('application-form')?.scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   };

//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden text-orange-400">
//       {/* Background decorations */}
//       <div className="absolute inset-0 opacity-10" style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7f50' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//       }}></div>

//       {/* Floating orange orbs */}
//       <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-xl opacity-20 animate-float"></div>
//       <div className="absolute bottom-32 right-32 w-24 h-24 bg-orange-600 rounded-full blur-lg opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
//       <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-400 rounded-full blur-md opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
//             Join LemyCode
//           </h1>

//           <div className="inline-block mb-8">
//             <h2 className="text-2xl md:text-4xl font-semibold text-orange-400 mb-2">
//               Junior Flutter Developer
//             </h2>
//             <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"></div>
//           </div>

//           <p className="text-xl md:text-2xl text-orange-300 mb-8 leading-relaxed max-w-3xl mx-auto">
//             Build the future of blockchain-powered digital voting with <span className="text-orange-500 font-semibold">NeoVote</span>, 
//             featured in 7 pilot elections on Solana blockchain
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button 
//               onClick={scrollToApplication}
//               size="lg" 
//               className="bg-orange-600 hover:bg-orange-500 text-black font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               Apply Now
//             </Button>
//             {/* <Button 
//               variant="outline" 
//               size="lg"
//               className="border-orange-400 text-orange-400 hover:bg-orange-900/20 backdrop-blur-sm px-8 py-6 text-lg"
//               onClick={() => document.getElementById('job-details')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               Learn More
//             </Button> */}
//           </div>

//           {/* Job highlights */}
//           <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
//             <div className="bg-orange-900/10 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-700 flex items-center gap-3">
//               <span className="text-2xl">💰</span>
//               <span className="text-orange-300 font-medium">KSh 70,000 - 120,000</span>
//             </div>
//             <div className="bg-orange-900/10 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-700 flex items-center gap-3">
//               <span className="text-2xl">🕐</span>
//               <span className="text-orange-300 font-medium">Part-time to Full-time</span>
//             </div>
//             <div className="bg-orange-900/10 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-700 flex items-center gap-3">
//               <span className="text-2xl">🏢</span>
//               <span className="text-orange-300 font-medium">Hybrid Work</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
