import React from 'react';
import { Parallax } from 'react-parallax';

const CoverBan = ({ img, header, para }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-content text-center items-center text-white bg-[rgba(0,0,0,0.4)] py-24 w-9/12">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{header}</h1>
                        <p className="mb-5 font-thin text-sm uppercase">{para}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CoverBan;