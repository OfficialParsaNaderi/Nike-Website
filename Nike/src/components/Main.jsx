import Header from "./Header.jsx";
import { CustomerReviews, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality, } from "../assets/js/script.js";
import Footer from "./Footer.jsx";

export default function Main() {
    return (
        <>

            <Header />

            <main className="relative">

                <section className="xl:padding-l wide:padding-r padding-b"> <Hero /> </section>
                <section className="padding-x pl-15 py-25 pt-50"> <PopularProducts /> </section>
                <section className="padding-x pl-15 py-20"> <SuperQuality /> </section>
                <section className="padding-x pl-15 py-20"> <Services /> </section>
                <section className="padding-x pl-15 py-20"> <SpecialOffers /> </section>
                <section className="padding-x pl-15 py-20"> <CustomerReviews /> </section>
                <section className="padding-x sm:py-32 pl-15 py-16 w-full"> <Subscribe /> </section>

            </main>

            <section className="bg-black padding-x padding-t pb-16 max-container">
                <Footer />
            </section>

        </>
    )
}