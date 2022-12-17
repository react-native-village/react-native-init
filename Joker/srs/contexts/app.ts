import {createContext} from 'react';

import {EventEmitter} from 'events';

class App extends EventEmitter {}

export const app = new App();

export const AppContext = createContext(app);
