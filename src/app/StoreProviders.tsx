'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, setupStore } from './store/Store';

const store = setupStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  storeRef.current = store;

  return <Provider store={store}>{children}</Provider>;
}