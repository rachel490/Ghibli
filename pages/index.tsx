import type { NextPage } from "next";
import CardList from '../components/common/CardList/CardList';
import ImageCarousel from "../components/main/ImageCarousel/ImageCarousel";
import SearchBar from '../components/main/SearchBar/SearchBar';
import Layout from "../components/common/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout >
      <ImageCarousel />
      <SearchBar />
      <CardList />
    </Layout>
  );
};

export default Home;
