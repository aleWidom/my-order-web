
import { Navbar, MainHome } from "@/sections"

interface HomeProps {
  searchParams: {
    table: string
  }
}

export default async function Home({ searchParams }: HomeProps) {

  const tableID = searchParams?.table;


  return (
    <>
      <Navbar tableID={tableID} />
      <MainHome tableID={tableID} />
    </>
  );
}
