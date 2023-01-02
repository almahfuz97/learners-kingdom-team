import Link from "next/link";
import { useRouter } from "next/router";
import { Children, useContext } from "react";
import Loading from "../../components/Loader/Loading";
import UserProfile from "../../components/UserProfile/UserProfile";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import { AuthContext } from "../../context/AuthProvider";
import DashboardLayout from "../../layout/DashboardLayout";


const Dashboard = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const router = useRouter();

    console.log(router)
    if (loading) return <div><Loading></Loading></div>
    if (!user?.email) return <><p className=" text-center mt-6 font-bold uppercase">You are not logged in. Please <Link href={'/login'} className=' underline text-green-400'>Login</Link></p></>

    return (
        <div>

        </div>
    );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;

