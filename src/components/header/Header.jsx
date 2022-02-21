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
    <p>Aqui ficará o header com as opçoes</p>

    <span>{currentDate}</span>
</header>
);
}

export default Header
