import { FormattedMessage } from 'react-intl';
import './Subtitle.scss';

const Subtitle = ({ label, styleClass }) => {
  return (
    <p className={`subtitle ${styleClass}`}>
      <FormattedMessage id="form.verify" />
    </p>
  );
};

export default Subtitle;
