// app/layout.tsx
import Banner from "../../components/banner"
import Navbar from "../../components/navbar";
import BlogNavbar from "./components/blogNavbar";
import ProjectDiscussion from "@/app/components/ProjectDiscussion";
import Footer from "@/app/components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-poppins">
      <body>
       <Banner />
        <Navbar />
        <BlogNavbar />
        {children}
        <ProjectDiscussion />
        <Footer />
      </body>
    </html>
  );
}
