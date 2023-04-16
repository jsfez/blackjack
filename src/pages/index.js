import Hand from "../components/Hand";

export default function Home() {
  return (
    <main className="mt-8 mx-4 absolute inset-0">
      <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Entrainement au comptage des cartes{" "}
      </h1>
      <div className="mb-4">
        Technique de comptage{" "}
        <a
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          href="https://fr.m.wikipedia.org/wiki/Blackjack_(jeu)#Comptage_des_cartes"
        >
          Hi-Low
        </a>
      </div>

      <div className="flex justify-center items-center">
        <Hand />
      </div>
    </main>
  );
}
