import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

export default function Home({
  revalidatedOn,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>this was revalidated at: {revalidatedOn}</div>;
}

export function getStaticProps(): GetStaticPropsResult<{
  revalidatedOn: string;
}> {
  return {
    props: {
      revalidatedOn: new Date().toISOString(),
    },
    revalidate: 20,
  };
}
