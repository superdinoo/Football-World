import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/Header';
import MainLeageCalendar from '../../components/MainLeageCalendar';
import Footer from '../../components/Footer';
import { apiCreate } from './../../utils/api';
import { Pagination } from 'antd';
import style from './CompCalendar.module.css';


const CompCalendar = () => {
return (
<React.Fragment>
<Header />
<MainLeageCalendar />

<Footer />
</React.Fragment>
)
}
export default CompCalendar;
