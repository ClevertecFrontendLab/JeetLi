import React from 'react';
import CleverfitURL from '../../assets/img/Cleverfit.svg';
import FitURL from '../../assets/img/fit.svg';
import ExitURL from '../../assets/img/Exit.svg';
import warnIcon from '../../assets/img/warnIcon.png';
import { ExitIconProps } from 'src/models/types';
import errorIcon from '../../assets/img/errorIcon.png';
import sucseccIcon from '../../assets/img/successIcon.png';

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
export const WarnIcon: React.FC<ExitIconProps> = ({ style }) => (
    <img
        src={warnIcon}
        alt='Warn icon'
        style={style}
        className='result-icon-warn'
        width={'70px'}
        height={'61.25px'}
    />
);
export const ErrorIcon: React.FC<ExitIconProps> = ({ style }) => (
    <img
        src={errorIcon}
        alt='Error icon'
        style={style}
        className='result-icon-warn'
        width={'70px'}
        height={'61.25px'}
    />
);
export const SucseccIcon: React.FC<ExitIconProps> = ({ style }) => (
    <img
        src={sucseccIcon}
        alt='Sucsecc icon'
        style={style}
        className='result-icon-warn'
        width={'70px'}
        height={'61.25px'}
    />
);
