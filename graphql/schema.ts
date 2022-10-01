import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Film {
    id: ID
    title: String
    original_title: String
    original_title_romanised: String
    image: String
    movie_banner: String
    description: String
    director: String
    producer: String
    release_date: String
    running_time: String
    rt_score: String
    people: [String]
    species: [String]
    locations: [String]
    vehicles: [String]
    url: String
  }

  type Person {
    id: ID
    name: String
    gender: String
    age: String
    eye_color: String
    hair_color: String
    films: [String]
    species: String
    url: String
  }

  type Species {
    id: ID
    name: String
    classification: String
    eye_colors: String
    hair_colors: String
    people: [String]
    films: [String]
    url: String
  }

  type Query {
    films: [Film]
    film(id: String): Film
    people: [Person]
    person(id: String): Person
    all_species: [Species]
    species(id: String): Species
  }
`;

export default typeDefs;
