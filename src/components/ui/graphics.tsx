import React from 'react';
import CleverfitURL from '../../assets/img/Cleverfit.svg';
import FitURL from '../../assets/img/fit.svg';
import ExitURL from '../../assets/img/Exit.svg';
import { ExitIconProps } from 'src/models/types';
export const CleverfitLogo: React.FC = () => (
    <img className='img-cleverfit' width={'100%'} src={CleverfitURL} alt='Cleverfit Logo' />
);

export const FitLogo: React.FC = () => (
    <img className='img-fit' width={'100%'} src={FitURL} alt='Fit Logo' />
);

export const ExitIcon: React.FC<ExitIconProps> = ({ style }) => (
    <img
        style={style}
        className='anticon ant-menu-item-icon'
        width={'14.29px'}
        height={'14.29px'}
        src={ExitURL}
        alt='Exit icon'
    />
);
