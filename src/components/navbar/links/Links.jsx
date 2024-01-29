import Link from "next/link";
import styles from './links.module.css';
import NavLink from "../navLink/NavLink";

const Links = () => {
    const Links = [
        {
            title: 'Homepage',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Blog',
            path: '/blog',
        }
    ];

  return (
    <div className={styles.links}>
        {Links.map(links=>(
            <NavLink item={links} key={links.title}/>
        ))}
    </div>
  )
}

export default Links