
import { Navbar, MainHome } from "@/sections"


export default async function Home({ searchParams }: any) {

  const tableID = searchParams?.table || '';

  return (
    <>
      <Navbar tableID={tableID} />
      <MainHome tableID={tableID} />
    </>
  );
}
