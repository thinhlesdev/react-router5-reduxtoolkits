import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { router } from '../src/router';
import { createStore } from '../src/store/create-store';

export const store = createStore(router);

const Providers: FC = ({ children }) => (
  <Provider store={store}>
    <RouterProvider router={router}>{children}</RouterProvider>
  </Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
