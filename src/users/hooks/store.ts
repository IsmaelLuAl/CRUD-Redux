import { type TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { type AppDispatch, type RootState } from '../store'

// Creamos dos nuevas constantes que sirvan para las funciones selector y dispatch pero que ya esten tipados
// con lo cual no tendremos que tiparlos cada vez que los utilicemos
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
