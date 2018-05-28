# Web Components con Angular Elements
Respositorio con el código utilizado para la publicación Web Components con Angular Elements

![Imagen Principal Artículo](http://nicoavila.s3.amazonaws.com/articulos/08_01webcomponents-angular-elements.jpg)

## Instalación

1. Clonar el proyecto

```git clone https://github.com/nicoavila/dog-of-the-day.git```

2. Ejecutar

```npm install```

3. Realizar el build con

```ng build --prod --output-hashing=none && cat dist/dog-of-the-day/{runtime,polyfills,scripts,main}.js | gzip > elements.js.gz```

4. Copiar el archivo elements.js.gz

5. Abrir (con un servidor que soporte gzip) el archivo ```index.html```
