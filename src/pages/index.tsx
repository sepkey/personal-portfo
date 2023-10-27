import { Inter } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import imageSep from '../../public/images/sep.jpg';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  return {
    props: {
      pageId: 'about_me',
      metadata: {
        title: 'Who is Sepide Kia?',
        description:
          'Discover the work of Sepide Kia on her personal website. ',
        openGraph: {
          image: 'https://example.com/image.jpg',
          url: 'https://example.com',
        },
      },
    },
  };
}
export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-indigo-500">
          Weclome to my portfolio!
        </h1>
      </header>
      <div className="grid grid-cols-2 mx-6 my-4 justify-items-center items-center">
        <div className="px-8">
          <p>
            Hi there! My name is Sepide and I&apos;m a{' '}
            <span className="bg-teal-200">front-end developer</span> with 2
            years of experience. I&apos;m passionate about creating beautiful,
            responsive, and user-friendly websites that provide a seamless
            experience for visitors.
          </p>
          <br />
          <p>
            My journey in web development started over 3 years ago when I
            discovered my love for coding and design. Since then, I&apos;ve
            honed my skills in HTML, CSS, JavaScript, and other front-end
            technologies to create websites that not only look great but also
            perform well.
          </p>
        </div>
        <div className="p-3">
          <Image
            className="w-80 rounded-md shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5
            backdrop-blur"
            src={imageSep}
            alt="sepide picture"
          />
        </div>
      </div>
    </div>
  );
}

//I&apos;m Sepide
