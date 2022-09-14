
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2> Contacto Rápido </h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre"> Nombre </label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email"> Email </label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono"> Telefono </label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="nombre"> Nombre </label>
                        <textarea name=""></textarea>
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2> Otras vias de comunicacion </h2>
                <p> Tambien puede contactarse con nosotros por los siguientes medios: </p>
                <ul>
                    <li> Telefono:  </li>
                    <li> Email: </li>
                    <li> Facebook: </li>
                    <li> Twitter: </li>
                    <li> Instagram: </li>
                </ul>
            </div>
        </main>
    )
}
export default ContactoPage;