import { notFound } from "next/navigation";
import { AddAuthorButtom } from "@/components/authors/AddAuthorButtom";
import { AuthorList } from "@/components/authors/authorList";
import { getAuthors } from "@/actions/authors";

export default async function AuthorsPage({ searchParams }) {

  const { page, pageSize } = searchParams

  const { data, error } = await getAuthors({ page, pageSize })

  if (error) {
    notFound()
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-title font-bold">Autores</h1>
        <AddAuthorButtom />
      </div>
      <div>
        <AuthorList authors={data} />
      </div>
    </>
  );
}