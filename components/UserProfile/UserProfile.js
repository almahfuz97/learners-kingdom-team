import React, { useContext } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import Loading from '../Loader/Loading';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import { AuthContext } from '/context/AuthProvider';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    if (loading) return <div><Loading /></div>
    return (
        <div>
            <DashboardLayout>
                <WhoWeAre />
            </DashboardLayout>
        </div>
    );
};

export default UserProfile;