import { FormattedMessage } from 'react-intl';

import { ReactComponent as Logo } from '../../assets/images/logos/stc.svg';
import { ReactComponent as LangIcon } from '../../assets/images/icons/globe.svg';
import { ReactComponent as Fileicon } from '../../assets/images/icons/file.svg';

import './Banner.scss';
import Button from '../../components/Button';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Input from '../../components/Input/Input';

const Banner = () => {
  return (
    <div className="banner ">
      <div className="banner__box">
        <div className="banner__box-content">
          <div className="banner__box-icon-wrapper">
            <Fileicon className="banner__box-icon" />
          </div>
        </div>
        <Title styleClass="mt-5 mb-3 text-center" />
        <Subtitle
          label="Verify a digital certification by filling in the details below"
          styleClass="text-center"
        />
        <form className="px-5 mt-5">
          <Input
            type="number"
            translationsID="ID/Iqama number"
            placeholder="Enter ID/Iqama number"
          />
          <Input
            type="number"
            label="Reference number"
            placeholder="Enter document reference number"
            className="mt-5"
          />

          <Button label="Verify" styleClass="w-100 margin-top" />
        </form>
      </div>
      <nav className="banner__navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <Logo />
          <div className="banner__lang-icon d-flex align-items-center">
            <span>عربي</span>
            <LangIcon />
          </div>
        </div>
      </nav>
      <div className="banner__footer"></div>
    </div>
  );
};

export default Banner;
