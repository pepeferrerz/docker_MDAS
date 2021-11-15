La ENTRYPOINT especifica un comando que siempre se ejectutará cuando se inicie el contenedor.

Por otro lado, la CMD especifica los argumentos que se enviarán a la ENTRYPOINT.

Por eso, si solo especificas un CMD, docker ejecutará dicho comando usando la ENTRYPOINT por defecto que es /bin/sh -c.

