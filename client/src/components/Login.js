import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {


    const navigate = useNavigate();

    const handleLogin = () => {
       navigate('/',{
           replace: true
       });
       
    };

    return (
        <>
            <div class="container my-5">
                <div className='jumbotron'>
                    <h1>LOGIN</h1>
                    <br />
                    <form class="form" role="form" action="/repuestos" method="get" autocomplete="off">

                        <div class="form-group">
                            <label for="username">Usuario</label>
                            <input name='username' placeholder="Escribe tu nombre de usuario" class="form-control" type="text" />
                        </div>
                        <div class="form-group">
                            <label for="pass1">Contraseña</label>
                            <input name='password' placeholder="••••••••" class="form-control" type="password" />
                        </div>

                        <div class="form-group">
                            <input class="btn btn-dark my-3" type="submit" value="Login" onClick={handleLogin}/>
                        </div>
                    </form>

                    <hr />
                </div>
            </div>
        </>
    )
}
