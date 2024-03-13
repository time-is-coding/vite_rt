import { Models, RematchDispatch, RematchRootState, init } from '@rematch/core';
import { example } from './example.model';

interface RootModel extends Models<RootModel> {
  example: typeof example;
}

const models: RootModel = { example };

export const store = init({
  models,
});

export { example };
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
