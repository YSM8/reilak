import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        
        <div className="container-fluid">
            <div className="row">
                    <nav className="navbar navbar-expand-sm ">
                        <div className="col-2 text-center">
                            <Link 
                                className="navbar-brand"
                                to="/"
                            >
                                <p className="h2 navbar-logo font-weight-bold">Reilak</p>
                            </Link>
                        </div>
                        <div className="col-9 ">
                            <div className="row ">
                                <div className="col ">                                   
                                </div>
                                    <div className="navbar-nav col-1 ">
                                        <NavLink 
                                            activeClassName="active"
                                            className="nav-item nav-link " 
                                            exact
                                            to="/"
                                        >
                                            <i className="fas fa-user-circle navbar-iconos"></i>
                                        </NavLink>

                                        <NavLink 
                                            activeClassName="active"
                                            className="nav-item nav-link nombre " 
                                            exact
                                            to="/"
                                        >
                                         Victor
                                        </NavLink>
                                        
                                    </div>                                
                            </div>    
                        </div>
                        <div className="col-1">
                            <div className="navbar-collapse">
                                <div className="navbar-nav">
                                
                                    <li class="nav-item dropdown">
                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link dropdown-toggle "
                                        id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                                        exact
                                        to="/"
                                    >
                                        <i className="fas fa-bell navbar-iconos"></i>
                                    </NavLink>
                                    
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <h6 class="dropdown-header nombre">Notificaciones</h6>
                                            <div className="dropdown-divider"></div>
                                                                                    
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco a creado un nuevo evento</a>
                                                                                        
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco a creado un nuevo evento</a>
                                                                                                                                                                             
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco a creado un nuevo evento</a>
                                        </div>
                                    </li>
                                    

                                    <li class="nav-item dropdown">
                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link dropdown-toggle" 
                                        id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                                        exact
                                        to="/"
                                    >
                                        <i class="fab fa-facebook-messenger navbar-iconos"></i>
                                    </NavLink>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <h6 class="dropdown-header nombre ">Mensajes</h6>
                                            <div className="dropdown-divider"></div>
                                                                                    
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco a creado un nuevo evento</a>
                                                                                        
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco a creado un nuevo evento</a>
                                                                                                                                                                             
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco a creado un nuevo evento</a>
                                            
                                            
                                        </div>
                                    </li>

                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link" 
                                        exact
                                        to="/"
                                    >
                                        <i class="fas fa-cog navbar-iconos"></i>
                                    </NavLink>

                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link" 
                                        exact
                                        to="/"
                                    >
                                        <i class="fas fa-sign-out-alt navbar-iconos"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
        </div>
                
            
        
        

            
        
      
    )
}
