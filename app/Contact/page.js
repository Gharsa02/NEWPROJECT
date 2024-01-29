import Image from "next/image";
import Link from "next/link";

export default function () {
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Contactez l'équipe Tayara</h1>
            <form className="block max-w-sm mx-auto">
                <input type="text" placeholder="Nom" required></input>
                <input type="tel" placeholder="Numero de telephone" required></input>
                <input type="email" placeholder="email (optionelle)"></input>
                <textarea id="subject" name="subject" placeholder="Message"  required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
        
    )
}













