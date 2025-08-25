import { Divide } from "lucide-react";

export default function Testimonials() {
    return (
        <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                <span className="text-[#1C1C1C]">Bring your best i</span>
                <span className="text-[#828282] ">deas to life with Codecones.</span>{" "}
                <span className="text-[#A7A7A7] ">Your ne</span>
                <span className="text-[#DFDFDF] ">xt success is just one design away.</span>
            </h1>

            <div className="flex space-x-4">
                <div className="bg-[#F9F9F9] shadow-md rounded-md p-6 max-w-sm">
                    <div className="flex items-center mb-4 rounded-[24px]">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src="./assets/testimonalspic.svg"
                            alt="Testimonial Image"
                        />
                        <div>
                            <h3 className="font-semibold text-lg">Samantha</h3>
                            <p className="text-gray-500">CEO @ ResolveCX</p>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                        "As a dad, Nuvra has been incredible for my family. They're always there when we need them."
                    </p>
                    <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-2 text-sm text-gray-400">5.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
