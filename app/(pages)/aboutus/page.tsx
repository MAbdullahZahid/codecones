import Banner from "../../components/banner"
import Navbar from "../../components/navbar";
import Image from "next/image";
export default function AboutUsPage() {
    return (
        <div>
            <Banner />
            <Navbar />
            <section>
             <h1 className="text-5xl font-bold">
  We craft digital experiences. For startups <span className="bg-gradient-to-r from-[#0059A8] to-[#FBAD18] bg-clip-text text-transparent font-bold">shaping  tomorrow.</span>
</h1>


<h2>Powering 250+ SaaS products with design that scales to 100M+ users and $2B+ in funding.</h2>

<Image src="./assets/aboutus/aboutusheaderpic.svg" alt="Description of image" width={500} height={300} />
            </section>
        </div>
    );
}