const essays: EssayItemProps[] = [
  { title: 'React context vs React Redux', topic: 'react', writer: 'Behnam J' },
  { title: 'Say goodby to redux', topic: 'react', writer: 'Erfan M' },
  {
    title: 'Fiber tree in next js , How it works?',
    topic: 'react',
    writer: 'Erfan M',
  },
];
export async function getStaticProps() {
  return {
    props: {
      pageId: 'essays',
      metadata: {
        title: "Sepide's essays",
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
export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h2 className="text-2xl">Essays</h2>

        <p className="text-base mt-6 text-zinc-600">
          List of essays I have written sofar
        </p>
      </header>

      <div className=" mx-6 my-4 ">
        <ul className="mt-16 px-8 flex flex-col gap-2">
          {essays.map(({ title, topic, writer }) => (
            <EssayItem
              title={title}
              topic={topic}
              writer={writer}
              key={title}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

type EssayItemProps = {
  topic: string;
  title: string;
  writer: string;
};

function EssayItem({ topic, title, writer }: EssayItemProps) {
  return (
    <li>
      <a href={title}>
        <div className="rounded overflow-hidden border border-indigo-500 px-4 py-2">
          <h2 className="font-bold mb-2">{title}</h2>
          <div className="px-6 flex justify-between ">
            <span className="inline-block text-sm  font-semibold text-gray-400 ">
              {writer}
            </span>

            <span className="font-bold text-xs mb-2 uppercase text-teal-400">
              #{topic}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
