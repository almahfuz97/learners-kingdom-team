import getCategory from "../../util/getCategory";

const Category = ({ categories }) => {
    return (
        <section className="container max-w-screen-xl mx-auto">
            <div>

            </div>
            <div className="flex gap-4">
                <aside className="border border-primary_color min-w-[240px] flex flex-col gap-2 p-4 rounded-lg">
                    <p className="font-bold">Categories</p>
                    {
                        categories.map((category, i) => <p key={i}>{category.category_name}</p>)
                    }
                </aside>
                <main className="border border-primary_color flex-1">
                </main>
            </div>
        </section>
    );
};


export async function getServerSideProps() {
    return getCategory();
}

export default Category;