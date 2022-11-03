import Link from "next/link";
import { useRouter } from "next/router";

import style from './Nav.module.scss'

const navigation = [
    { id: 1, title: 'війна', path: '/' },
    { id: 2, title: 'новини', path: '/news' },
    { id: 3, title: 'політика', path: '/politics' },
    { id: 4, title: 'економіка', path: '/economics' },
    { id: 5, title: 'погляди', path: '/views' },
    { id: 6, title: 'світ', path: '/world' },
  ];


const Nav = () =>{

    const { pathname } = useRouter();

    return(
        <nav className={style.headNav}>
            <div className= {style.container}>
                <ul className ={style.headNavList}>
                    {navigation.map(({ id, title, path }) => (
                        <Link key={id} href={path}>
                            <li className={pathname === path ? style.active : null}> <img src="/svg/Vector.svg" alt="fire" /> {title}</li>
                        </Link>
                    ))}
                </ul>
                <div className={style.live}>
                    <img src='/svg/dot.svg' alt="live" />
                    <div className={style.liveDescri}>LIVE</div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav