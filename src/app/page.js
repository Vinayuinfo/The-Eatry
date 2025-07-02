import Link from "next/link";
import ChartsRecords from "./Component/ChartsRecords";
import Navbar from "./Component/Navbar";
import Vnavbar from "./Component/Vnavbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-mono">
      <Navbar />
      <div className="flex flex-1 md:pl-64">
        <div className="hidden md:block">
          <Vnavbar />
        </div>

        <div className="flex-1 justify-center min-h-[calc(100vh-82px)] text-center items-center p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-6 text-center mt-8">
            Welcome to The Eatry
          </h1>
          
          <ChartsRecords />

          <p className="text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Discover a delightful variety of dishes crafted with the freshest
            ingredients. Whether you’re craving authentic flavors or looking for
            new taste adventures, we have something special for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-green-50 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p>
                We source local, organic produce to ensure every bite bursts
                with flavor.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Cozy Ambience</h3>
              <p>
                Enjoy your meals in a warm, inviting atmosphere perfect for
                families and friends.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p>
                Craving something delicious at home? We deliver piping hot meals
                fast!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href='/menu' className="bg-green-700 text-white px-8 py-4 rounded-full text-lg hover:bg-green-800 transition">
              Expolre Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
