import './style.css'

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <a href="#inicio" className="header__logo">
          🐾 Amigo Fiel
        </a>

        <nav className="header__nav">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header