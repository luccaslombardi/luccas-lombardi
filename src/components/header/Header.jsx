import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import './header.scss'

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
});


  return (
    <header className="headerContainer">
    
    <p>LOGOTIPO</p>

    <div className="headerMenu">
      <li>Opção 1</li>
      <li>Opção 2</li>
      <li>Opção 3</li>
    </div>

    <span>{currentDate}</span>
</header>
);
}

export default Header
