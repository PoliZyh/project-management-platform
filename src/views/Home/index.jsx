import Layout from "../../layout"

import { Route, Routes, Navigate } from "react-router-dom"
import Welcome from "./components/Welcome"
import UseInstructions from "./components/UseInstructions"
import NotificationMaterials from './components/NotificationMaterials'
import InformationChanges from "./components/InformationChanges"
import DeclarationEntry from "./components/DeclarationEntry"
import ClosingMaterials from "./components/ClosingMaterials"
import NewDeclarationEntry from "./components/NewDeclarationEntry"
import NewInformationChanges from "./components/NewInformationChanges"
import NewClosingMaterials from "./components/NewClosingMaterials"

const Home = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="" element={<Navigate to={'/home/welcome'}></Navigate>}></Route>
                    <Route path="/use-instructions" element={<UseInstructions></UseInstructions>}></Route>
                    <Route path="/welcome" element={<Welcome></Welcome>}></Route>
                    <Route path="/notification-materials" element={<NotificationMaterials></NotificationMaterials>}></Route>
                    <Route path="/star/information-changes" element={<InformationChanges></InformationChanges>}></Route>
                    <Route path="/star/declaration-entry" element={<DeclarationEntry></DeclarationEntry>}></Route>
                    <Route path="/star/closing-materials" element={<ClosingMaterials></ClosingMaterials>}></Route>
                    <Route path="/new/information-changes" element={<NewInformationChanges></NewInformationChanges>}></Route>
                    <Route path="/new/declaration-entry" element={<NewDeclarationEntry></NewDeclarationEntry>}></Route>
                    <Route path="/new/closing-materials" element={<NewClosingMaterials></NewClosingMaterials>}></Route>
                </Routes>
            </Layout>
        </>
    )
}


export default Home