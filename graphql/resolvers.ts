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
  Film: {
    people: (parent: any) => {
      return parent.people.map(async (person: string) => {
        const person_id = person.split("people/")[1];
        const person_data = await axios.get(PERSON_API(person_id));
        return person_data.data.data;
      });
    },
    species: (parent: any) => {
      return parent.species.map(async (species: string) => {
        const species_id = species.split("species/")[1];
        const species_data = await axios.get(SPECIES_API(species_id));
        return species_data.data.data;
      });
    },
  },
  Query: {
    films: async () => {
      const res = await axios.get(FILMS_API);
      return res.data.data;
    },
    film: async (_: any, { id }: { id: string }) => {
      const res = await axios.get(FILM_API(id));
      return res.data.data;
    },
    people: async () => {
      const res = await axios.get(PEOPLE_API);
      return res.data.data;
    },
    person: async (_: any, { id }: { id: string }) => {
      const res = await axios.get(PERSON_API(id));
      return res.data.data;
    },
    all_species: async () => {
      const res = await axios.get(SPECIES_ALL_API);
      return res.data.data;
    },
    species: async (_: any, { id }: { id: string }) => {
      const res = await axios.get(SPECIES_API(id));
      return res.data.data;
    },
  },
};

export default resolvers;
