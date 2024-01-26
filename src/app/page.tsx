
import { Navbar, MainHome } from "@/sections"
import { fetchTable } from "@/services"

interface HomePageProps {
  searchParams: {
    table: string,
    query: string,
    category: string
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {

  const table = await fetchTable(searchParams?.table)
  const query = searchParams?.query;
  const categoryID = searchParams?.category;

  return (
    <>
      <Navbar table={table} />
      <MainHome table={table} query={query} categoryID={categoryID} />
    </>
  )
}
