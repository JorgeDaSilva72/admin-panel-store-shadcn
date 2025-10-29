import AppAreaChart from "@/components/AppAreaChart";
import AppBarChartByDay from "@/components/AppBarChartByDay";
import AppBarChartByMonth from "@/components/AppBarChartByMonth";
import AppPieChart from "@/components/AppPieChart";
import NewVsReturningAreaChart from "@/components/NewVsReturningAreaChart";
import SalesByCountryPieChart from "@/components/SalesByCountryPieChart";
import CardList from "@/components/CardList";
// import TodoList from "@/components/TodoList";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChartByDay />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChartByMonth />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <SalesByCountryPieChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Product" />
      </div>

      {/* <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div> */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <NewVsReturningAreaChart />
      </div>
    </div>
  );
};

export default Homepage;
