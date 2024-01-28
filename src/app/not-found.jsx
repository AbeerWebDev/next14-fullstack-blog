import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <div>NotFound</div>
        <p>Sorry the page you&apos;re looking for does not exist.</p>
        <Link href='/'>Return to HomePage</Link>
    </div>
  )
}

export default NotFound