import Card from "./components/Card";

const Dashboard = () => {
    const cardsData = [
        {
          image: '/hero.png',
          title: 'Título do Card 1',
          date: '30 de Novembro, 2023',
          badges: ['Badge 1', 'Badge 2'],
        },
        {
          image: '/hero.png',
          title: 'Título do Card 2',
          date: '1 de Dezembro, 2023',
          badges: ['Badge 3', 'Badge 4', 'Badge 5'],
        },
    ]
    return (
        <section className=" flex justify-around items-center p-2">
            {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
        </section>
     );
}
 
export default Dashboard;