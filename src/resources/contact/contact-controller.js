import { crudControllers } from '../../utils/crud'
import { Contact } from './contact-model'

// Llamamos a las funciones del CRUD y le pasamos el modelo de Contacto.
export default crudControllers(Contact)

// Recordemos que por practicidad las CRUD controllers estan escritas como funciones generales que nos permiten
// reutilizarlas especificando solo el modelo de MongoDB a utilizar en este caso el de Contacto.