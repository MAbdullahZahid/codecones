export default function BlogNavbar() {
  return (
    <nav className="w-full">
      <ul className="flex flex-wrap justify-start md:justify-start space-x-4 md:space-x-6 border-b border-transparent ml-2 md:ml-8 py-2 md:py-4">
        {/* Active Tab */}
        <li className="mb-2 md:mb-0">
          <a
            href="/blogs"
            className="text-[#FBAD18] font-medium relative text-sm md:text-base after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#FBAD18] after:mt-1 md:after:mt-3 after:rounded"
          >
            All Blogs
          </a>
        </li>

        {/* Other Tabs */}
        <li className="text-black font-medium hover:text-[#FBAD18] cursor-pointer text-sm md:text-base mb-2 md:mb-0">
          Custom Software
        </li>
        <li className="text-black font-medium hover:text-[#FBAD18] cursor-pointer text-sm md:text-base mb-2 md:mb-0">
          DevOps
        </li>
        <li className="text-black font-medium hover:text-[#FBAD18] cursor-pointer text-sm md:text-base mb-2 md:mb-0">
          UX UI
        </li>
        <li className="text-black font-medium hover:text-[#FBAD18] cursor-pointer text-sm md:text-base mb-2 md:mb-0">
          Staff Augmentation
        </li>
      </ul>
    </nav>
  );
}
