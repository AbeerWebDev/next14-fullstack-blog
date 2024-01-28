import Link from "next/link";

const Links = () => {
    const Links = [
        {
            title: 'HomePage',
            path: '/',
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
    <div>
        {Links.map(links=>(
            <Link href={links.path} key={links.title}>{links.title}</Link>
        ))}
    </div>
  )
}

export default Links