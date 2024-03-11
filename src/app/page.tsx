
import { Navbar, MainHome } from "@/sections"
import { fetchTable } from "@/services";

interface HomeProps {
  searchParams: {
    table: string
  }
}

export default async function Home({ searchParams }: HomeProps) {

  const tableID = searchParams?.table;

  const table = await fetchTable(tableID);

  return (
    <>
      {table !== undefined && 
      <>
      <Navbar table={table} />
      <MainHome table={table} />
      </>}
    </>
  );
}
