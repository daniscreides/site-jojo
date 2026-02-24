import { personagens } from "../data/personagens";
import { partes } from "../data/partes";
import { stands } from "../data/stands";
import { jojos } from "../data/jojos";

export const getPartes = () => Promise.resolve(partes);
export const getPersonagens = () => Promise.resolve(personagens);
export const getStands = () => Promise.resolve(stands);
export const getJojos = () => Promise.resolve(jojos);