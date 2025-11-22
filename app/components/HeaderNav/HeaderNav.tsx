import { HeaderNavItem } from "./HeaderNavItem/HeaderNavItem"

export const HeaderNav = () => {
    const nav = ['Home', 'Discover', 'About Us']
    return (
        <nav className="flex items-center justify-between gap-8">
            {nav.map((el, i) => <HeaderNavItem key={i} text={el} />)}
        </nav>
    )
}