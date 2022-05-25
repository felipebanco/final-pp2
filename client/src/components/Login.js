import React from 'react'

export const Login = () => {
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
                            <input class="btn btn-dark my-3" type="submit" value="Login" />
                        </div>
                    </form>

                    <hr />
                </div>
            </div>
        </>
    )
}
