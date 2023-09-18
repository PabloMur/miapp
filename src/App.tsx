import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { Loader } from "./components/loader";

function App() {
    return (
        <Suspense fallback={<p>Cargando</p>}>
            <RecoilRoot>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </RecoilRoot>
        </Suspense>
    );
}

export default App;
