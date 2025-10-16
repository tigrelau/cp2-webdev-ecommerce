import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <Link to="/">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      </Link>
      <nav className="flex gap-4">
			      <Link to="/carrinho" className= "text-black">Carrinho</Link>
			      <Link to="/perfil" className= "text-black">Perfil</Link>
      </nav>
    </header>
  );
}
