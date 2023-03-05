import { FormattedMessage } from 'react-intl';
import './Title.scss';

const Title = ({ styleClass }) => {
  return (
    <h2 className={`title ${styleClass}`}>
      <FormattedMessage id="form.title" />
    </h2>
  );
};

export default Title;
