import axios from "axios";
import {
  FILMS_API,
  FILM_API,
  PEOPLE_API,
  PERSON_API,
  SPECIES_ALL_API,
  SPECIES_API,
} from "./api";

const resolvers = {
  Query: {
    films: async () => {
      const res = await axios.get(FILMS_API);
      return res.data;
    },
    film: async (_: any, { id }: { id: string }) => {
      const res = await axios.get(FILM_API(id));
      return res.data;
    },
    people: async () => {
      const res = await axios.get(PEOPLE_API);
      return res.data;
    },
    person: async (_: any, { id }: { id: string }) => {
      const res = await axios.get(PERSON_API(id));
      return res.data;
    },
    all_species: async () => {
      const res = await axios.get(SPECIES_ALL_API);
      return res.data;
    },
    species: async (_: any, { id }: { id: string }) => {
      const res = await axios.get(SPECIES_API(id));
      return res.data;
    },
  },
};

export default resolvers;
