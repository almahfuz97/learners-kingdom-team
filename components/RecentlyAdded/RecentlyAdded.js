import RecentlyAddedCard from "./RecentlyAddedCard";

const RecentlyAdded = () => {
    return (
        <div className="my-6">

            <h2 className="text-2xl">   New Book Added</h2>
            <div className=" flex flex-wrap gap-4">
                <RecentlyAddedCard />
                <RecentlyAddedCard />
                <RecentlyAddedCard />
                <RecentlyAddedCard />

            </div>
        </div>
    );
};

export default RecentlyAdded;