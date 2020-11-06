export default function acceder() {
    return(
        <div className="container">
            <div className="form_">
                <form className="form__">
                    <div>
                        <label for="email">Email</label>
                        <input type="text" placeholder="Email" className="input__" name="email" />
                    </div>
                    <div>
                        <label for="Contraseña">Contraseña</label>
                        <input type="text" placeholder="Email" className="input__" name="Contraseña" />
                    </div>
                    <div>
                        <a href="/registrarse">Crear una cuenta</a>
                    </div>
                    <div>
                        <button>Acceder</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
