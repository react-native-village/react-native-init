import { configureStore } from '@reduxjs/toolkit'
import { DragAndDropReducer } from './components/QuestionComponents/DragVariant/DragAndDropSlice'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { sectionReducer, bgColorReducer, profileReducer, tabBarReducer } from './slices'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const profileConfig = {
  key: 'profile',
  version: 1,
  storage: AsyncStorage
}
const persistedProfileReducer = persistReducer(profileConfig, profileReducer)

export const store = configureStore({
  reducer: {
    DragAndDrop: DragAndDropReducer,
    bgColor: bgColorReducer,
    section: sectionReducer,
    profile: persistedProfileReducer,
    tabBar: tabBarReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// typed hooks
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedStore = () => useStore<RootState>()
