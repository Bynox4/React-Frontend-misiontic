import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarMenu from '../componentes/SidebarMenu';
import ContentHeader from '../componentes/ContentHeader';

const DashBoard = () => {
    return (
        <>
            <Navbar></Navbar>
            <SidebarMenu></SidebarMenu>

            <main id="main" className="main">
                <ContentHeader
                    titulo={"DashBoard"}
                    breadCrumb1={"DashBoard"}
                    breadCrumb2={""}
                    breadCrumb3={""}
                    ruta={"/menu-principal"}
                />
                <h1>¡Hola, bienvenido {localStorage.getItem("username").split(' ', 1)}! </h1>
            </main>
        </>
    );
}

export default DashBoard;