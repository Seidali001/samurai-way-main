import React from 'react';
import preloader3 from "../../../assets/image/loader3.gif";
import Skeleton from "@mui/material/Skeleton";
import s from "../../../components/common/Preloader/Preloader.module.css"

const Preloader = () => {
    return (
        <div className={s.skletonContainer}>
             <span className={s.skeletonAvatar}>
           {/* <img alt="preloader" src={preloader3}/>*/}
                 <Skeleton animation="wave" variant="circular" width={40} height={40}/>
            <span className={s.skeletonInfo}>
                <Skeleton
                    animation="wave"
                    height={10}
                    width="600px"
                    style={{marginBottom: 6}}
                />
                <Skeleton animation="wave" height={10} width="50%"/>
            </span>

        </span>
        </div>

    );
};

export default Preloader;