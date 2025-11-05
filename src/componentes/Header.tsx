
const Header = () => {
  return (

    <div>

      <header className="px-22 background-white shadow-sm">
      
      <nav className="flex flex-row justify-between items-center py-7">
        
        <a href="/" className="text-2xl font-light text-orange-500">
        MyBlog
        </a>

        <ul  className="flex flex-row space-x-4">
          <li>
            <a 
            href="#Blog"
            className="text-sm font-medium decoration-cyan-900 decoration-2 underline-offset-8 hover:text-amber-600"
            >
            Blog
            </a>
            </li>

          <li>
            <a 
            href="#Contacto"
            className="text-sm font-medium decoration-cyan-900 decoration-2 underline-offset-8 hover:text-amber-600"
            >
            Contacto
            </a>
            </li>
        </ul>

      </nav>
    </header>

    </div>
  )
}

export default Header