import Link from "next/link"

export default function () {
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Connexion</h1>
            <form className="block max-w-sm mx-auto">
                <input type="email" placeholder="email" required></input>
                <input type="password" placeholder="Mot de passe" required></input>
                <button type="submit">Se connecter</button>
                <Link href="/Inscription"><div className="my-4  text-center text-gray-500 ">Mot de passe oublié ?</div>
                </Link>
                <Link href="/Inscription"><button type="submit">Créer nouveau compte</button>
                </Link> 
            </form>
        </section>
        
    )
}