"use client";

import React from "react";
import MainStore from "./mainStore";

const mainStore = new MainStore();

export const stores = Object.freeze({
  mainStore: mainStore,
  calcStore: mainStore.calcStore,
  todoStore: mainStore.todoStore,
  weatherStore: mainStore.weatherStore,
  marketStore: mainStore.marketStore,
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
