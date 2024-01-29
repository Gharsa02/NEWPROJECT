export default function () {
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Connexion</h1>
            <form className="block max-w-sm mx-auto">
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="Mot de passe"></input>
                <button type="submit">Se connecter</button>
            </form>

        </section>
        
    )
}