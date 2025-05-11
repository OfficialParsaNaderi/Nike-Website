import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

export default function Header() {
    return (
        <>
            <header className="padding-x pl-15 py-8 absolute z-10 w-full">
                <nav className="flex justify-between items-center max-container">
                    <a href="/">
                        <img src={headerLogo} className="m-0 w-[129px] h-[29px]" width={129} height={29} alt="HeaderLogo" title="HeaderLogo" />
                    </a>

                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="font-montserrat leading-normal text-lg text-gray-500">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 pr-20">
                        <a href="/">Sign in</a>
                        <span>/</span>
                        <a href="/">Explore More</a>
                    </div>

                    <div className="hidden max-lg:block padding-x pr-15">
                        <img src={hamburger} width={25} height={25} alt="HamBurger" title="Hamburger" />
                    </div>

                </nav>
            </header>
        </>
    )
}