import Image from "next/image";
import Link from "next/link";
import Join from "./Join";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "About", "Services", "Blog"],
  },
  {
    id: 2,
    section: "Services",
    link: ["Resume", "Placement", "Portfolio", "Github", "LinkedIn"],
  },
  {
    id: 3,
    section: "Pages",
    link: ["Privacy Policy", "Terms of Use", "License"],
  },
];

const Footer = () => {
  return (
    <div className="bg-navyblue -mt-24 -pt-10" id="first-section">
      <Join />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-semibold text-white mb-4">Let's Code</h3>
            <p className="text-white text-lg mb-6">
              Let's continue to assist each other and create opportunities together. Join Us and Let's Code.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/letscodeforever">
                <Image
                  src="/images/footer/vec.svg"
                  alt="Facebook"
                  width={15}
                  height={20}
                />
              </Link>
              <Link href="https://twitter.com/Lets__Code">
                <Image
                  src="/images/footer/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.instagram.com/lets__code/">
                <Image
                  src="/images/footer/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.instagram.com/lets__code/">
                <Image
                  src="/images/footer/linked.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">{product.section}</h3>
              <ul className="space-y-3">
                {product.link.map((link: string, index: number) => (
                  <li key={index}>
                    <Link href="/" style={{ textDecoration: 'none' }} className="text-white hover:text-black transition duration-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-offwhite">
            &copy; 2023 - All Rights Reserved by{" "}
            <Link href="/" className="text-offwhite">
              Let's Code
            </Link>
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/" style={{ textDecoration: 'none' }} className="text-offwhite hover:text-black-500 transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/" style={{ textDecoration: 'none' }} className="text-offwhite hover:text-black-500 transition duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
