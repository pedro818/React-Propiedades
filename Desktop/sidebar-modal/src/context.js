import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const [isModalOpen, setisModalOpen] = useState(false)

    const openSidebar = () => {
        setisSidebarOpen(true)
    }

    const closeSidebar = () => {
        setisSidebarOpen(false)
    }

    const openModal = () => {
        setisModalOpen(true)
    }

    const closeModal = () => {
        setisModalOpen(false)
    }







    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal
    }}>
        {children}
    </AppContext.Provider>
}
//custom hook
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider }