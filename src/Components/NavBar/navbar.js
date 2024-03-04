import React, { useState } from 'react' 
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
   {/*activeClass='active': Esto establece la clase CSS que se aplicará al enlace cuando esté activo, es decir, cuando esté en la sección actual de la página.
.to='intro': Este es el atributo to que indica a dónde debe dirigirse el enlace cuando se hace clic en él. En este caso, parece que está apuntando a una sección de la página con el identificador intro.
.spy={true}: Esto indica si el enlace debe "espiar" las secciones de la página, es decir, si debe activarse cuando la sección correspondiente está visible en la ventana del navegador.
.smooth={true}: Esto habilita el desplazamiento suave cuando se hace clic en el enlace, lo que significa que la página se desplazará suavemente hacia la sección indicada en lugar de hacerlo bruscamente.
.offset={-100}: Este atributo establece un desplazamiento adicional cuando se hace clic en el enlace. En este caso, se está desplazando hacia arriba 100 píxeles desde el inicio de la sección.
.duration={500}: Este atributo establece la duración de la animación de desplazamiento suave en milisegundos. En este caso, la duración es de 500 milisegundos (medio segundo). */}
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
       {/*  .onClick={() => {}}: Esto establece un controlador de eventos para el evento de clic del botón. Cuando se hace clic en el botón, se ejecutará la función definida entre llaves.
.document.getElementById('contact'): Esto obtiene el elemento HTML que tiene el ID contact. En este caso, se espera que sea un elemento en la página al que se desea desplazar.
.scrollIntoView({behavior: 'smooth'}): Esto desplaza la página hacia el elemento obtenido anteriormente (contact) de manera suave. La opción behavior: 'smooth' especifica que el desplazamiento debe ser suave en lugar de instantáneo. */}
        <button className='desktopMenuBtn' onClick={() => {
               document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt='' className='desktopMenuImg'/>Contact Me</button>

            <img src={menu} alt='logo' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
{/*Este div representa el contenedor del menú de navegación. Su visibilidad se controla dinámicamente a través del estado showMenu. Si showMenu es true, se muestra el menú (display: flex), de lo contrario, se oculta (display: none). */}
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
            
    </nav>
  )
}

export default Navbar;