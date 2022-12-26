



// import Review from "../../Components/Review/Review";
 
// const reviews = ({ reviews }) => {
//     return (
//         <div>
//             <h1 className="text-center font-bold text-2xl text-primary_color">Our Customers Reviews</h1>
//             <div className="grid grid-cols-4 gap-1">
           
//             {
               
//                 reviews.map(review => <Review key={review.id} review={review}></Review>)
//             }
//             </div>
//         </div>
       
//     );
// };
 
// export default reviews;
 
// export const getServerSideProps = async () => {
 
//     const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=8");
//     const data = await res.json();
 
//     return {
//         props: {
//             reviews: data
//         }
//     }
 
// }
