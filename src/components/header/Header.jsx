import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import "./header.scss";
import changeContent from "../../utils/changeContent.jsx";

function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className="headerContainer">
      <p>LOGOTIPO</p>

      <div className="headerMenu">
        <li onClick={changeContent}>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
      </div>

      <span>{currentDate}</span>
    </header>
  );
}

export default Header;
