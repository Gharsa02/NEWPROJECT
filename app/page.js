import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
      <div>
      <section className="hero">
        <div className="py-16">
        <h1 className="text-4xl font-semibold">Nouveautés immobilères</h1>
        <p className="my-4 text-gray-500">Tout L'immobilier Neuf en Tunisie en 1 Clic !</p>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-8 py-2 rounded-full"> Voir les annonces </button>
          <button>Creer une annonce</button>
        </div>
        </div>
        <div className="relative">
          <Image src={'/tayara-logo.png'} layout={"fill"} objectFit={"contain"} alt={"tayara"}/>
        </div>
      </section>

      <section>
        <div className="text-center mb-5">
          <h3 className="uppercase text-gray-500 font-semibold leading-4">VOIR</h3>
          <h2 className="text-primary font-bold text-4xl italic">LES ANNONCES</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover: shadow-black/25 transition-all">
            <Image  width={400} height={200}src={'/villa1.jpg'}  alt={'villa'}/>
            <h4 className="font-semibold text-xl my-2">Villa Ain Zaghouan </h4>
            <p className="text-gray-500 text-sm">A louer à Ain Zaghouan/ Aouina sur la rue khaled Ibn Walid une villa indépendante à usage habitation ou administrative. Elle composée d'un salon avec un accès sur le jardin, d'une cuisine agencée, d'une salle d'eau, deux chambre à coucher et d'une salle de bain.</p>
            <button className=" mt-4 bg-primary text-white rounded-full px-6 py-2">Plus D'infos</button>
          </div>

          <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover: shadow-black/25 transition-all">
            <Image  width={400} height={200}src={'/menzah1.jpg'}  alt={'villa'}/>
            <h4 className="font-semibold text-xl my-2">Villa Menzah 1 </h4>
            <p className="text-gray-500 text-sm">A vendre une villa à Menzah1 trés bone orientation fait l'angle de rues dans un quartier résidentiel batis sur terrain de 682 m² composée au rdc d'un salon avec une cheminée fonctionelle ,séjour , chambre amis, sd, cuisine avec coin repas à létage 4 chambres et suite parentale tf et prix négociable .</p>
            <button className=" mt-4 bg-primary text-white rounded-full px-6 py-2">Plus D'infos</button>
          </div>

          <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover: shadow-black/25 transition-all">
            <Image  width={400} height={200}src={'/appartement.jpg'}  alt={'appartement'}/>
            <h4 className="font-semibold text-xl my-2">Appartement Bab Souika</h4>
            <p className="text-gray-500 text-sm">Un appartement à l'étage supérieur a une entrée privée, composé de trois chambres, un salon, une cuisine et une douche. Il est équipé de gaz naturel et d'un chauffe-eau avec un compteur(steg/sonede) privé +un toit commun.</p>
            <button className=" mt-4 bg-primary text-white rounded-full px-6 py-2">Plus D'infos</button>
          </div>
        </div>
      </section>
      
    </div>

  );
}
