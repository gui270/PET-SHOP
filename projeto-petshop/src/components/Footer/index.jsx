import './style.css'

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer__content">
        <div className="footer__col">
          <h3>🐾 PetShop Amigo Fiel</h3>
          <p>Cuidado e carinho para o seu melhor amigo.</p>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <ul>
            <li>📞 (00) 00000-0000</li>
            <li>✉️ contato@amigofiel.com.br</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Endereço e horário</h4>
          <ul>
            <li>📍 Rua Exemplo, 123 - Seu Bairro</li>
            <li>🕒 Seg a Sáb, 8h às 18h</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} PetShop Amigo Fiel. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer