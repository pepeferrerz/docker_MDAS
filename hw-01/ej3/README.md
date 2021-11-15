Creamos el archivo Dockerfile y, a partir de el Dockerfile, construimos la imagen (image-exercise-3) con el comando:

```jsx
docker build -t image-exercise-3 -f Dockerfile .
```
El siguiente paso es crear el contenedor (container-exercise-3) a partir de la imagen creada anteriormente, teniendo en cuenta el volumen static-content. 

```jsx
docker run -d -p 8080:80 --name container-exercise-3 --rm -v static_content:/usr/share/nginx/html image-exercise-3
```


