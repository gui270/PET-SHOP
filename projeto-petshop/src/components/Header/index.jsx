import './style.css'

const servicos = [
  { id: 1, icone: '🛁', titulo: 'Banho e Tosa', texto: 'Higiene completa com produtos suaves e atendimento cuidadoso.' },
  { id: 2, icone: '🩺', titulo: 'Veterinário', texto: 'Consultas, vacinas e acompanhamento da saúde do seu pet.' },
  { id: 3, icone: '🛍️', titulo: 'Pet Shop', texto: 'Rações, brinquedos, acessórios e petiscos das melhores marcas.' },
  { id: 4, icone: '🏨', titulo: 'Hotelzinho', texto: 'Hospedagem segura e confortável enquanto você viaja.' },
]

const clientes = [
  { id: 1, icone: '🐶', nome: 'Thor', tutor: 'Ana', depoimento: 'Atendimento maravilhoso! O Thor volta sempre cheiroso e feliz.' },
  { id: 2, icone: '🐱', nome: 'Mia', tutor: 'Carlos', depoimento: 'Equipe cuidadosa e pontual. Recomendo demais.' },
  { id: 3, icone: '🐕', nome: 'Bob', tutor: 'Juliana', depoimento: 'O hotelzinho é de confiança, o Bob ficou super bem.' },
]

function Clientes() {
  return (
    <main className="clientes">
      <section className="clientes__hero" id="inicio">
        <div className="container">
          <h1>Cuidado e carinho para o seu melhor amigo</h1>
          <p>
            Na PetShop Amigo Fiel, cada animal é tratado como parte da família.
            Conheça nossos serviços e veja o que os tutores dizem sobre nós.
          </p>
          <a href="#contato" className="clientes__btn">Fale com a gente</a>
        </div>
      </section>

      <section className="clientes__section" id="servicos">
        <div className="container">
          <h2>Nossos serviços</h2>
          <div className="clientes__grid">
            {servicos.map((servico) => (
              <article className="clientes__card" key={servico.id}>
                <span className="clientes__icone">{servico.icone}</span>
                <h3>{servico.titulo}</h3>
                <p>{servico.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clientes__section clientes__section--alt" id="clientes">
        <div className="container">
          <h2>Nossos clientes</h2>
          <div className="clientes__grid">
            {clientes.map((cliente) => (
              <article className="clientes__card" key={cliente.id}>
                <span className="clientes__icone">{cliente.icone}</span>
                <h3>{cliente.nome}</h3>
                <p className="clientes__depoimento">"{cliente.depoimento}"</p>
                <small>Tutor(a): {cliente.tutor}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Clientes