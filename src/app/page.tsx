'use client';
import { useRouter } from 'next/navigation';

const Home = () => {

  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🎯 Increase Your Mythic+ Success</h1>
      <p className="text-xl mb-6 max-w-2xl">
        A simple, no-fuss tool to improve your odds in Mythic+ by avoiding party wipes and wasted keys.
      </p>
      <button
        onClick={() => router.push('/success')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-8"
      >
        Try It Now
      </button>
      <p className="text-md max-w-xl">
        We pull real-time character and party data directly from Raider.IO to assess key-level performance
        and party tilt—before you even zone in. Whether you’re pugging or pushing, our tool helps you make
        smarter decisions, faster.
        <br /><br />
        💡 More features coming soon — and installation is always as simple as copy, paste, and play.
      </p>
    </main>
  );

}

export default Home;