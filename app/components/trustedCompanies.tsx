import company1 from "../../public/assets/Logo box (2).svg";
import company2 from "../../public/assets/Logo box (3).svg";
import company3 from "../../public/assets/Logo box (4).svg";
import company4 from "../../public/assets/comp1.svg";
import company5 from "../../public/assets/logoipsum-242.svg";
import company6 from "../../public/assets/logoipsum-265.svg";
import company7 from "../../public/assets/Logo box.svg";

export default function TrustedCompanies() {
  const companies = [company1, company2, company3, company4, company5, company6, company7];

  return (
    <div className="overflow-hidden py-8 relative">
      <div className="text-[36px] font-medium text-center mb-8">
        Trusted by 500+ global companies
      </div>

      <div className="relative w-full overflow-hidden">
        <div id="slider" className="flex gap-8 whitespace-nowrap">
          {[...companies, ...companies].map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Company ${idx + 1}`}
              className="inline-block w-[171px] md:w-[150px] sm:w-[120px]"  // Adjust width for responsiveness
              height={32}
            />
          ))}
        </div>
      </div>

      {/* GSAP CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

      {/* Animation Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', () => {
              const slider = document.getElementById('slider');
              if (!slider || !window.gsap) return;
              const totalWidth = slider.scrollWidth / 2; // half because we duplicated
              gsap.to(slider, {
                x: -totalWidth,
                duration: 20,
                ease: 'linear',
                repeat: -1
              });
            });
          `,
        }}
      />
    </div>
  );
}
