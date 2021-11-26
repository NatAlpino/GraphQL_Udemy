//rodando o servidor

import * as http from 'http';
import app from './app';

const server = http.createServer(app);

//pedindo pro servido ouvir na porta 3000:
server.listen(3000);

/*configurando um manipulador de eventos para quando o servidor 
estiver escutando na porta 3000. Dessa forma eu recebo uma mensagem
confirmando que ele esta ok.*/
server.on('listening', () => console.log('Listening on port 3000...'));

