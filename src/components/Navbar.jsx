import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        	<ul>
		        <li>
			        <Link to='/'>Home</Link>
		        </li>
		        <li>
			      <Link to='/Carrinho'>Carrinho</Link>
		        </li>
	        </ul>
      </div>
    </nav>
  );
}
