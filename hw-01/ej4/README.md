En primer lugar, creamos el Dockerfile a partir del cual crearemos la imagen, configurando los parametros necesarios para cumplir las condiciones del ejercicio en el HEALTHCHECK, utilizando la API de node.js al llevar a cabo el request.

Al iniciar la aplicacion y hacer la primera prueba de los 45 segundos, obtenemos el estado healthy.

<img alt="" src="./ej4_healthy.png" style="width: 601.70px; height: 49.33px; " title="">

Al realizar la segunda prueba, obtenemos el estado unhealthy

<img alt="" src="./ej4_unhealthy.png" style="width: 601.70px; height: 57.33px; " title="">

