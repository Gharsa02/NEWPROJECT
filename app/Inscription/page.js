import Image from "next/image";
import Link from "next/link";

export default function () {
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">S'inscrire</h1>
            <form className="block max-w-sm mx-auto">
                <input type="text" placeholder="Nom" required></input>
                <input type="text" placeholder="nom d'utilisateur" required></input>
                <input type="email" placeholder="email" required></input>
                <input type="password" placeholder="Mot de passe"></input>
                <input type="tel" placeholder="Numero de telephone" required></input>
                <button type="submit">S'inscrire</button>
                <div className="my-4  text-center text-gray-500 ">Ou</div>
                <button className ="flex gap-4 justify-center"> 
                <Image  width={24} height={34}src={'/Google.png'}  alt={'google'}/>
                    S'inscrire ave Google 
                </button>
            </form>
        </section>
        
    )
}