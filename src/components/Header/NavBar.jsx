import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function NavBar() {
    const backHome = useNavigate()
    const [open, setOpen] = useState(false)
    const link = <>
        <li><a onClick={() => backHome('/')}>Home</a></li>
        <li>
            <details>
                <summary>Listed Book</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                    <li><a>Favorite</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Page to Read</a></li>
    </>
    return (
        <div className="sticky top-0 z-40">
            <div className="navbar bg-base-100 shadow-sm font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div className="btn btn-ghost md:hidden" onClick={() => setOpen(!open)}>
                            {
                                open ? <X></X> : <Menu></Menu>
                            }
                        </div>
                        <ul className={`absolute bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ${open ? 'top-10' : '-top-44'} duration-1000`}>
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="sm:text-2xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="sm:navbar-end flex">
                    <a className="btn mr-2 bg-[#23BE0A] text-white">Sign Up</a>
                    <a className="btn bg-[#59C6D2] text-white">Log In</a>
                </div>
            </div>
        </div>
    )
}
