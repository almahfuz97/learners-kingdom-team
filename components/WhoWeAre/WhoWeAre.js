
const WhoWeAre = () => {
    return (
        <div className="container max-w-screen-2xl mx-auto bg-primary_color/20 p-6 lg:px-20 lg:py-16">
            <div className="max-w-screen-xl mx-auto md:flex items-center gap-8 lg:gap-16">
                <div className="md:w-1/2">
                    <img src="https://i.ibb.co/9yrbPKC/books.jpg" alt="" className=" rounded-lg" />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <p className="font-medium text-lg mb-2">Welcome to the Wonderful Kingdom of Books</p>
                    <h4 className="text-3xl font-bold mb-6"> <span className='text-xl  md:text-2xl text-primary_color font-bold uppercase'>Learner's</span> <span className='text-xl md:text-2xl text-secondary_color font-bold uppercase'>Kingdom</span> is an Online Bookstore</h4>
                    <p className="text-justify">If you're looking for great value books, then Learner's Kingdom is the place for you.
                        In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vestibulum eu odio. interdum lacus sit amet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
                    </p>
                    <button className="px-4 py-3 font-semibold text-white rounded bg-primary_color mt-6">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;