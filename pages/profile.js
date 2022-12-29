import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loader/Loading";
import UserProfile from "../components/UserProfile/UserProfile";
import { AuthContext } from "../context/AuthProvider";


const Profile = () => {
    const { loading, user } = useContext(AuthContext);
    const router = useRouter();

    if (loading) return <div><Loading></Loading></div>
    if (!user?.email) return <><p className=" text-center mt-6 font-bold uppercase">You are not logged in. Please <Link href={'/login'} className=' underline text-green-400'>Login</Link></p></>

    return (
        <div>
            <UserProfile></UserProfile>
        </div>
    );
};

export default Profile;