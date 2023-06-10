import ExploreCard from "@/components/hireFreelancer/ExploreCard";
import Search from "@/components/hireFreelancer/Search";
import ServiceCardList from "@/components/hireFreelancer/ServiceCardList";

export default function HireAnimator() {
  return (
    <div className="h-screen bg-slate-50 mb-[50px]">
      <div className="my-6">
        <Search />
      </div>
      <ServiceCardList />
      <ExploreCard />
    </div>
  );
}
