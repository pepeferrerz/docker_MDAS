1. Crear un objeto de tipo deployment con las especificaciones del ejercicio 1.

   Usando el comando 

   `kubectl apply -f nginx-dep.yaml`

   creamos el objeto y observamos que tenemos 3 pods con el comando

   `kubectl get pods`

   

   • Despliega una nueva versión de tu nuevo servicio mediante la técnica

   “recreate”.

   Especificamos el tipo de despliegue Recreate en el nginx-dep.yaml y usamos el siguiente comando para desplegarlo:

   `kubectl set image deployment/nginx-dep nginx=nginx:1.20-alpine`
   
   Con `kubectl get pods` vemos el estado de los pods.
   
   
   
   • Despliega una nueva versión haciendo “rollout deployment”
   
   He creado un nuevo fichero "nginx-dep-rollout" especificando el tipo RollingUpdate.
   
   Usamos el comando 
   
   `kubectl set image deployment/nginx-dep nginx=nginx:1.20-alpine`
   
   se actualizará la imagen.
   
   Con `get pods -o wide` veremos que hay pods activos y si entramos en la descripción de alguno de los pods, podemos ver como han actualizado la versión.a la 1.20
   
   
   
   • Realiza un rollback a la versión generada previamente
   
   Usamos el comando
   
   `kubectl rollout undo deployment/nginx-dep --to-revision=1`
   
   De esta forma, hacemos el rollout. Ahora, obtenemos los pods activos con `kubectl get pods -o wide` y entrando en la descripción de uno de ellos vemos que ha vuelto a la version 1.19.4.
   
   
