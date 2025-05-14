import NavBar from '../components/NavBar'
import Header from '../components/Header';
import Features from '../components/Features';
import Quotations from '../components/Quotations';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

function Home(){
    return(
        <>
            <NavBar />
            <Header/>
            <Features/>
            <Quotations/>
            <BlogSection/>
            <Footer/>
        </>
        )
}
export default Home;