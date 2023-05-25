import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BlogLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}