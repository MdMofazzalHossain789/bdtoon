import ExploreCard from "@/components/hireFreelancer/ExploreCard";
import Search from "@/components/hireFreelancer/Search";
import ServiceCardList from "@/components/hireFreelancer/ServiceCardList";
import BlankSpace from "@/components/shared/BlankSpace";

export default function HireAnimator() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 ">
      <div className="py-6">
        <Search />
      </div>
      <ServiceCardList />
      <ExploreCard />
      <BlankSpace />
    </div>
  );
}
