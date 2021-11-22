1. Diseña una estrategia de despliegue que se base en ”Blue Green”. Podéis utilizar la imagen del ejercicio 1.

   En primer lugar, usamos el comando

   `kubectl apply -f dep-blue.yaml`

   para desplegar el deployment dep-blue.yaml, en el que se ha definido una imagen nginx:1.19.4-alpine.

   Con `kubectl get deployments` y `kubectl get pods` vemos los deployments y pods activos.

   Como en el ejercicio 3, ahora usamos un NodePort para exponer la aplicación al exterior:

   `kubectl apply -f blue-green-service.yaml`

   Con `minikube service nginx-nodeport` exponemos el servicio para que pueda ser accesible desde el exterior usando minikube.

   Despues de esto, usamos `kubectl apply -f dep-green.yaml` para desplegar la nueva versión que usará nginx:1.20-alpine.

   Ahora es necesario redirigir el tráfico a esta nueva version de la app, por lo que usaremos el comando patch para ello:

   `kubectl patch service nginx-nodeport --type merge -p '{"spec": {"selector": {"app": "nginx-server-green"}}}'`

   Por último, podemos ver la descripcion del servicio con 

   `kubectl describe service nginx-nodeport`

   
