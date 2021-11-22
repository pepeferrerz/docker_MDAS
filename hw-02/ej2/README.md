1. Crear un objeto de tipo replicaSet a partir del objeto anterior con las siguientes especificaciones:

   • Debe tener 3 replicas

   En primer lugar, usamos el comando
   
   ` kubectl apply -f nginx-rs.yaml`
   
   para subirlo a Minikube, ya que nginx-rs.yaml es el archivo a partir del cual deployaremos el ReplicaSet.
   
   Haciendo uso del siguiente comando
   
   `kubectl get pods -o default -o wide`
   
   observamos que hay tres pods activos.
   
   También podemos ver los RS activos:
   
   `kubectl get rs`
   
   
   
   • ¿Cúal sería el comando que utilizarías para escalar el número de replicas a 10?
   
   `kubectl scale --replicas=10 rs nginx`
   
   
   
   • Si necesito tener una replica en cada uno de los nodos de Kubernetes, ¿qué objeto se adaptaría mejor? (No es necesario adjuntar el objeto)
   
   El ReplicaSet es el objeto que queremos en esta ocasión. En este supuesto, necesitaríamos primero hacer uso de un DaemonSet, para así tener un pod en cada nodo y luego hacer una réplica de estos mediante un RS.
   
   
