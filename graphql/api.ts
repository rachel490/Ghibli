const BASE_URL = "https://ghibli-api.vercel.app/api";

export const FILMS_API = `${BASE_URL}/films`;
export const FILM_API = (id: string) => `${BASE_URL}/films/${id}`;

export const PEOPLE_API = `${BASE_URL}/people`;
export const PERSON_API = (id: string) => `${BASE_URL}/people/${id}`;

export const SPECIES_ALL_API = `${BASE_URL}/species`;
export const SPECIES_API = (id: string) => `${BASE_URL}/species/${id}`;
