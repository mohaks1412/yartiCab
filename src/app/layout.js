'use client'

import { Provider } from 'react-redux';
import NavBar from './components/landing-page/NavBar';
import './globals.css';
import { store } from '../store/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <div className="viewport-wrapper">
          <main className="aspect-container">
            <NavBar />
            {children}
          </main>
        </div>
        </Provider>
      </body>
    </html>
  );
}