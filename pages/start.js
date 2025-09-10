export default function Start() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Get Started</h1>
      <p className="text-gray-600">Fill out your details to begin your Better.com journey.</p>
      <form className="mt-6 space-y-4 max-w-md">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-betterBlue text-white py-2 px-4 rounded">Start Now</button>
      </form>
    </div>
  )
}
