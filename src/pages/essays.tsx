export async function getStaticProps() {
  return { props: { pageId: 'essays' } };
}
export default function Essays() {
  return <div>essays</div>;
}
