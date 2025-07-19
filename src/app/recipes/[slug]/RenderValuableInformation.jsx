import React from 'react';

import timeIcon from '../../../../public/images/recipesimages/time.svg';
import bowlIcon from '../../../../public/images/recipesimages/bown.svg';
import cookIcon from '../../../../public/images/recipesimages/cook.svg';
import Image from 'next/image';

const RenderValuableInformation = ({ valuableInfo }) => {
  return (
    <div className="valuable-info-placeholder">
      <div className="info-pair">
        <Image src={timeIcon} alt="Duration" width={40} height={40} />
        <p className="duration">{valuableInfo?.duration || 'Not specified'}</p>
      </div>

      <div className="info-pair">
        <Image src={cookIcon} alt="Difficulty" width={40} height={40} />
        <p className="difficulty">{valuableInfo?.difficulty || 'Not specified'}</p>
      </div>

      <div className="info-pair">
        <Image src={bowlIcon} alt="Portions" width={40} height={40} />
        <p className="quantity">{valuableInfo?.portions || 'Not specified'}</p>
      </div>
    </div>
  );
};

export default RenderValuableInformation;
