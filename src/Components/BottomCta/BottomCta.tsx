import React from 'react';
import './bottomCta.scss';

function BottomCta() {
    return (
        <div className='bg-green d-flex justify-space-around align-center text-white w-80 h-150 br-2 mx-auto'>
            <h2 className='w-50'>Buy healthy controlled
                Catfish from Hatchery to Oven</h2>
            <button type='button' className='bg-white no-border br-1 text-center w-150 h-50'>Order Button</button>
        </div>
    );
}

export default BottomCta;
