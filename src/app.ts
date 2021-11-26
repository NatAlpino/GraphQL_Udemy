//importando tudo que eu tenho no pacote express e dando o nome de express
import * as express from 'express';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    private middleware(): void {
        this.express.use('/hello', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send({
                hello: 'Hello Word!'
            });
        });
    }
}

//exportando o atributo ao inves da instancia:
export default new App().express;

