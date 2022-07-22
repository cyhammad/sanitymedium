import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.png'
function Header() {
  return (
    <header className='flex justify-between p-4 max-w-7xl mx-auto'>
      <div className="flex items-center">
        <div className='w-36 md:w-full px-5'>
          <Link href="/">
            <Image
              className="cursor-pointer object-cover"
              src={logo}
              alt="logo"
              width={200}
              height={40}
            />
          </Link>
        </div>
        <div className="hidden space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 text-white">Follow</h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600'>
        <h3>Sign In</h3>
        <h3 className='border px-4 rounded-full border-green-600'>Get Started</h3>
      </div>
    </header>
  )
}

export default Header
