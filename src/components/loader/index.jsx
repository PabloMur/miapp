import React from "react";
import { useRecoilValue } from "recoil";
import { loaderAtom } from "atoms";

const Loader = () => {
    const loaderStatus = useRecoilValue(loaderAtom);

    return loaderStatus ? (
        <div className="absolute top-0 bottom-0 left-0 right-0">Cargando</div>
    ) : (
        <></>
    );
};

export { Loader };
