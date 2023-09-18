import React from "react";
import { useRecoilValue } from "recoil";
import { loaderAtom } from "atoms";

const Loader = () => {
    const loaderStatus = useRecoilValue(loaderAtom);

    return loaderStatus ? (
        <div className="h-screen w-screen text-red-400">
            <h3>Cargando ...</h3>
        </div>
    ) : (
        <></>
    );
};

export { Loader };
