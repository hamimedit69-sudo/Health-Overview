import DashboardSidebar from "./components/DashboardSidebar";
import BmiCalculator from "./components/BmiCalculator";
import HealthDashboard from "./components/HealthDashboard";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="min-h-screen w-full bg-[#008979]">
        <DashboardSidebar />

        <main
          className="
            ml-14
            min-h-screen
            w-[calc(100%-56px)]
            sm:ml-[72px]
            sm:w-[calc(100%-72px)]
            lg:ml-20
            lg:w-[calc(100%-80px)]
          "
        >
          <div className="flex min-h-screen w-full min-w-0 flex-col lg:flex-row">
            <HealthDashboard />
            <BmiCalculator />
          </div>
        </main>
      </div>
    </div>
  );
}