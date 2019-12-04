## Aplicación de comandos NodeJS para Tareas

 *Esta aplicación sirve para crear tareas y que puedas gestionar las tareas ingresadas por medio de la consola, podrás visualizar las tareas que has completado tanto como las tareas que tienes que completar.*

Recuerda instalar los paquetes

```
npm install
```

Para utilizar la aplicación deberas correrla en la terminal de la siguiente manera:
~~~
node app "comando"
~~~
La lista de comandos que puedes utilizar en el apartado comando del anterior codigo es:
- crear
- actualizar
- borrar
- listar

También puedes visualizar estos comandos escribiendo en tu terminal
~~~
node app --help
~~~

Para *crear* una tarea deberas ingresar el siguiente comando.
~~~
node app crear -d Proyecto
~~~
Deberás utilizar comillas cuando ingreses un texto con espacios. El comando `-d `se utiliza para agregar la descripción de la tarea que se va a crear.
~~~
node app crear -d 'Proyecto Piano'
~~~
Cuando hayas creado ya varias tareas podrás visualizar las mismas con el comando:
~~~
node app listar
~~~
Por defecto siempre verás las tareas que no hayas completado. Cuando creas una tarea por defecto se crea como una tarea no completada.

Para *actualizar* el estado de una tarea, deberás hacer lo siguiente, donde `-d` corresponde a la descripción de a tarea que vas a actualizar y `-c` la marca por defecto como completa, sin embargo puedes agregar `-c false` para marcar una tarea como incompleta.
~~~
node app actualizar -d 'Proyecto Piano' -c
~~~
~~~
node app actualizar -d 'Proyecto Piano' -c false
~~~
Para *borrar* una tarea deberas hacer lo siguiente.
~~~
node app borrar -d 'Proyecto Piano'
~~~
Para *listar* las tareas que tengas podrás hacerlo de dos maneras:
1. Listar las tareas **Por hacer**
~~~
node app listar
~~~
2. Listar las tareas **Completadas**
~~~
node app listar -c
~~~
También podrás especificar el estado de las tareas que quieres listar especificando `true` o `false`.
~~~
node app listar -c true
~~~
~~~
node app listar -c false
~~~