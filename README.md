# AniJS

AniJS is a declarative animation handling library, for the web. The main objective is to provide an elocuent, easy to translate, and quick to develop environment.


## Try It!!

Check the online [Demostration](http://anijs.github.io/).


## Installation
 
**Bower**
```bash
$ bower install anijs
```

**Forked on [Github](https://github.com/anijs/anijs)**
```bash
$ git clone git@github.com:anijs/anijs.git
```

**Download as [Zip](https://github.com/anijs/anijs/archive/master.zip)**

 
## Usage
 
Put the AniJS file on your page.
```xml
<script src="anijs-min.js"></script>
```

Include the CSS animation styles definition, we strongly recomend you  to use the amazing [animate.css library](http://daneden.github.io/animate.css/) as starting point, this library provides beautiful animations. Also, you can define your own animations.
```xml
<head>
    <!-- Animate.css library -->
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/animatecss/3.1.0/animate.css">
</head>
```

Start playing by adding **anijs-data** tag to any HTML element.
```xml
<body>
    <header data-anijs="when: click, how: flipInY">
     <!-- ... -->
    </header>
    <nav data-anijs="when: scroll, where: window, what: footer, how: swing">
     <!-- ... -->
    </nav>
    <div id="main" data-anijs="when: DOMContentLoaded, where: document, how: swing">
     <!-- ... -->
    </div>
    <footer>
     <!-- ... -->
    </footer>
 </body>
```


## Documentation

Documentation Topics can be founded in our [Wiki Pages](https://github.com/anijs/anijs/wiki).


## Advantages

- Easy to use.
- Reusable code.
- Speed of development.
- Better integration between coders and designers.
- The obtained code is reliable, elgant and expressive.
- There is no need for third party libraries.
- Compact - around 6kb after gzipping.


## Contributing
AniJS is like a little girl, she needs hungry and foolish community members to grow up healthy. All your [comments](#comentarios), [issues](#issues), [stars ;) ](#starts), and your [pull requests](#github-code) are welcome.
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Aknowledgement

To [Ms. Ana Silvia Telleria](), [Mr. Yolier Galán](mailto:gallego@gmail.com), [Mr. René González](mailto:voltusv@gmail.com), [Mr. Julio Cañizares](juliorubcan@gmail.com) and to all the persons that helped with this project.

## History
 
**Version 0.1.0**

- Crear una animacion de forma declarativa.
	- Definir un evento desencadenador de la animación(when).
	- Definir los nodos desde donde se escuchará el evento desencadenador(where).
	- Definir un blanco para la animación.(what)
	- Definir la manera en que ejecutará la animación.(how)
	- Ejecutar una función antes de la animación, y poder deternerla.
	- Ejecutar una función cuando se termine la animación.
	- Definir en cada animacion los objetos propietarios de sus funciones de retorno(before y after). (Llamados helpers.)

- Linealización del evento animationEnd.
- Linealización del evento transitionEnd.
- Poder escuchar eventos del window object.
- Escuchar eventos del document object.

- Corriendo AniJS.
- Cambiando el ambito de ejecucion de AniJS.
- Crear una animación de manera no declarativa.
- Limpiar las animaciones asociadas a un nodo determinado.
- Registrar nuevos ayudantes.
- Agregar nuevas funciones a determinado ayudante.
- Funciones predeterminadas en los helpers, like removeAnim


## License
 
The MIT License (MIT)

Copyright © 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
