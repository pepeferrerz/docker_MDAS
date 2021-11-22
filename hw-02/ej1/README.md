1. Lamento la ausencia de capturas de pantalla, pero mi ordenador no me dejaba hacer capturas y no he podido solucionarlo a tiempo.

2. Responde las siguientes preguntas:

   • ¿Cómo puedo obtener las últimas 10 líneas de la salida estándar (logs generados por la aplicación)?

   Primero, usamos el siguiente comando para lanzar el Pod:

   `kubectl apply -f ./nginx-pod.yaml`

   Para obtener las 10 ultimas lineas de código, usamos el comando:

   `kubectl logs nginx | tail -n 10`

   • ¿Cómo podría obtener la IP interna del pod? Aporta capturas para indicar el proceso que seguirías.

   Usaríamos el comando 

   `kubectl get pods -o wide`

   De este modo, podremos visualizar la dirección IP de los pods asociados a nuestro namespace.

   • ¿Qué comando utilizarías para entrar dentro del pod?

   `kubectl exec nginx -it -- /bin/sh`

   • Necesitas visualizar el contenido que expone NGINX, ¿qué acciones
   debes llevar a cabo?

   Utilizaríamos el comando 

   `curl localhost:80`

   desde el pod, ya que localhost:80 es el puerto por defecto para nginx.

   • Indica la calidad de servicio (QoS) establecida en el pod que acabas de crear. ¿Qué lo has mirado?
