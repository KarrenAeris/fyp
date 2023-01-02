import Image from 'next/image'

export const TheHeader = () => {
  return (
    <header className="w-full h-16 fixed top-0 bg-black py-5 z-10">
      <div className="container center mx-auto flex justify-between items-center px-10">
        <div className="logo">
          <Image
            src="/img/header/logo.svg"
            alt="logo"
            width={130}
            height={24}
          />
        </div>
        <div className="text-white space-x-5">
          <a href="#">Quotes</a>
          <a href="#">Orders</a>
        </div>
        <div>
          <Image
            src="/img/header/user.svg"
            alt="user"
            width={27}
            height={27}
          />
        </div>
      </div>
    </header>
  )
}
