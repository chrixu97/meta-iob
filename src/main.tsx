import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/styles.scss'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { Provider } from 'react-redux';
import { store } from './state/store';

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>,
)
