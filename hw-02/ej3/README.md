1. Crea un objeto de tipo service para exponer la aplicación del ejercicio anterior de las siguientes formas:

   • Exponiendo el servicio hacia el exterior (crea service1.yaml)

   Como queremos exponer el servicio al exterior, para crear el service1 hacemos uso del Load Balancer, que incluye una IP pública por defecto al servicio de forma que puede ser abierto desde el exterior.

   Utilizando el comando 

   `kubectl apply -f service1.yaml`

   `minikube service nginx-loadb`

   publicamos el acceso desde minikube.

   Si accedemos al puerto en cuestión, podemos ver la página por defecto de nginx.

   

   • De forma interna, sin acceso desde el exterior (crea service2.yaml)
   
   En este caso, es un Cluster IP, el tipo de service que se crea por defecto.
   
   Usamos el comando 
   
   ´kubectl apply -f service2.yaml´
   
   para publicar el acceso desde Minikube.
   
   
   
   • Abriendo un puerto especifico de la VM (crea service3.yaml)
   
   En este último caso, usamos un NodePort, un servicio que controlará el tráfico de su puerto al servicio que deseamos. 
   
   
   
   
   
   
