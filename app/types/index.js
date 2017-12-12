// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type ReduxInitAction = { type: '@@INIT' };

export type Store = ReduxStore<{}, {}>;

export type Dispatch = ReduxDispatch<{}>;