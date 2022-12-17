import React from 'react';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
const Notice = () => {
  return (
    <div className="mx-12 mb-5">
      <div className="flex justify-center items-center">
        <PrivacyTipIcon size="large" />
      </div>
      <p className="p-2  font-semibold text-center">
        Your personal data will be used to process your order. Support your
        experience throughout this website. <br />
        for other purposes you can directly contact with us.{' '}
      </p>
    </div>
  );
};

export default Notice;
