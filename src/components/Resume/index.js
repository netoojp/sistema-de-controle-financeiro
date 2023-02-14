import React from 'react';
import ResumeItem from '../ResumeItem';
import * as S from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign, } from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
    return (
        <S.Container>
          <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
          <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
          <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </S.Container>
      );
}
 
export default Resume;