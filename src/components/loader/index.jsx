import React from "react";
import { useRecoilValue } from "recoil";
import { loaderAtom } from "atoms";

const Loader = () => {
    const loaderStatus = useRecoilValue(loaderAtom);

    return loaderStatus ? (
        <div className="absolute z-10 flex items-center justify-center top-0 bottom-0 left-0 right-0 h-full w-full backdrop-blur">
            <h3>Cargando ...</h3>
        </div>
    ) : (
        <></>
    );
};

export { Loader };
