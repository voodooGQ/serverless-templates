// Load polyfills (once, on the top of our web app)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@src/browser/index.css';

/**
 * Frontend code running in browser
 */
import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';

import ConfigContext from '@src/components/ConfigContext';
import { Config } from '@src/server/config';
import App from '@src/App';

const config = (window as Window).__CONFIG__ as Config;
delete (window as Window).__CONFIG__;

/** Components added here will _only_ be loaded in the web browser, never for server-side rendering */
const render = () => {
  hydrateRoot(
    document.getElementById('root') as Element,
    <>
      {/* The configuration is the outmost component. This allows us to read the configuration even in the theme */}
      <ConfigContext.Provider value={config}>
        <App />
      </ConfigContext.Provider>
    </>,
  );
};

render();
