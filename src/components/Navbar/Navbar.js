import Image from "next/image"
import logo from '../../imagesUsed/logo.png'

const Navbar = (props) =>{
    return(
        <div className="navbar absolute left-0 top-0 mt-4 flex justify-between items-center text-white">
            <div className="flex items-center justify-center before:absolute before:h-12 before:w-36 before:bg-white before:opacity-30 before:blur-2xl">
                <Image src={logo} className=" h-8 w-12 lg:h-12 lg:w-16"/>
                <p className=" text-xl lg:text-2xl font-semibold tracking-wider">Flopkart</p>
            </div>
            <p><a className="flex items-center justify-between text-lg lg:text-xl cursor-pointer before:hover:opacity-50 hover:duration-200 before:absolute before:h-12 before:w-36 before:bg-white before:opacity-30 before:blur-2xl">Our products</a></p>
        </div>
    )
}

export default Navbar