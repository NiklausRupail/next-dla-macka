import Image from 'next/image'
import logo from '@/public/next.svg'
import Link from 'next/link'
const Nav = () => {
    return (
        <nav className="flex justify-between bg-white py-4 px-6 rounded">
            <div>
                <Image src={logo} width={200} alt="logo" />
            </div>
            <div className="flex justify-around text-stone-900 items-center text-xl gap-5">
                <Link href="https://google.com">Google</Link>
                <Link href={'/test'}>Strona z czymś tam</Link>
            </div>
        </nav>
    )
}
export default Nav
