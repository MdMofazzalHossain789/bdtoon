import ExploreCard from "@/components/hireFreelancer/ExploreCard";
import Search from "@/components/hireFreelancer/Search";
import ServiceCardList from "@/components/hireFreelancer/ServiceCardList";

export default function HireAnimator() {
  return (
    <div className="h-full bg-slate-50 dark:bg-slate-800 ">
      <div className="pb-[20px]">
        <div className="py-6">
          <Search />
        </div>
        <ServiceCardList />
        <ExploreCard />
      </div>
    </div>
  );
}
