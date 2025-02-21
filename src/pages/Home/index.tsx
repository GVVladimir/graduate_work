import Catalog from "../../components/catalog/Catalog";
import ContactsBlock from "../../components/Contacts/contactsBlock";
import Footer from "../../components/Footer";
import HaveQuestion from "../../components/HaveQuestion";
import Header from "../../components/Header/Header";
import PotbournSneakers from "../../components/Potbor";
import Teames from "../../components/Teames";
import UsAbout from "../../components/usAbout";

const Home = () => {
  return (
    <>
      <Header />
      <Catalog
        data={{
          id: 0,
          vendorСode: "",
          inStock: 0,
          title: "",
          description: "",
          imgUrl: "",
          stars: 0,
          sizes: [],
          price: 0,
          oldPrice: 0,
          gender: "",
          color: "",
          compound: "",
          country: "",
        }}
      />
      <UsAbout />
      <PotbournSneakers />
      <Teames />
      <ContactsBlock />
      <HaveQuestion />
      <Footer />
    </>
  );
};
export default Home;
