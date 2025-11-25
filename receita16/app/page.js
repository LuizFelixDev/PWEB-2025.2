import Form from "next/form";

export default async function MovieForm() {
  return (
    <Form action="/movies" method="GET">
      <label htmlFor="idTitleSearchKey">Título</label>
      <input id="idTitleSearchKey" name="title" />
      <button type="submit">Pesquisar</button>
    </Form>
  );
}
