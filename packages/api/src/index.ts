import cors from 'cors';
import express from 'express';

import { Workspace, a } from 'types';

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/workspaces', (_, response) => {
    const workspaces: Workspace[] = [
        { name: 'api', version: '1.0.0' },
        { name: 'types', version: '1.0.0' },
        { name: 'web', version: '1.0.0' },
    ];
    response.json({ data: workspaces });
});

console.log(a);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
