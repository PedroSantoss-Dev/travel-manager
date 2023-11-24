import Card from "@/app/(landingPage)/components/custonCard";

const Categories = () => {
    return (
        <section className=" w-4/5 h-screen flex flex-row flex-wrap justify-evenly items-center ">
            <Card
             image="/praias.png"
             name="Praias"
            />
            <Card
             image="/trilha.jpg"
             name="Trilha"
            />
            <Card
             image="/cachoeiras.jpg"
             name="cachoeiras"
            />
            <Card
             image="/historicos.jpg"
             name="Cidades Historicas"
            />
            <Card
             image="/mais-requisitados.jpg"
             name="Mais vistados"
            />
            <Card
             image="/acampamento.jpg"
             name="cachoeiras"
            />
        </section>
      );
}
 
export default Categories;