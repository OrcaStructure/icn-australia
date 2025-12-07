import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import UpcomingShows from "../components/UpcomingShows";
import CategoriesSection from "../components/CategoriesSection";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <UpcomingShows />
      <CategoriesSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>ICN Australia | Natural Bodybuilding</title>;
