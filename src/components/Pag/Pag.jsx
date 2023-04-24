import React from 'react';
import {Pagination} from 'antd';
import './PagStyle.css' ;

const Pag = () => {
    return (
        <div className='pagination'>
            <Pagination total={150} />;
        </div>


        
        )

    }
export default Pag