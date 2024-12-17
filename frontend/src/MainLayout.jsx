import React from 'react';
import MainMenu from "./components/mainmenu/MainMenu";
import MainFooter from "./components/mainfooter/MainFooter";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import MainSidebar from "./components/mainsidebar/MainSidebar";

const MainLayout = ({children}) => {
    return (
        <>
            <MainMenu/>
            <MainSidebar />
            <main className={'p-4 mt-[130px] md:mt-[74px] sm:ml-64 pb-32 space-y-8'}>
                <div className={'mx-auto container'}>
                    <Breadcrumb />
                    {children}
                </div>
            </main>
            <MainFooter/>
        </>
    );
};

export default MainLayout;
