export default function Home() {
  return (
   <div className="bg-betterGreen h-screen w-screen flex flex-col items-center justify-center text-center px-6">
  
  <h1 className="text-8xl text-white font-bold mb-4 leading-snug">
    The first <br />
    <span className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
      AI-powered
    </span>{" "}
    Mortgage
  </h1>

  <p className="text-xl text-white max-w-xl mb-6">
    Our tech unlocks lower rates, higher chances of approval,
    and a lightning-fast process from approval to closing. Over $100 billion funded.
  </p>

 
  <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
    Start my pre-approval
  </button>
</div>


  )
}
