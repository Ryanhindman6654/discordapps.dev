import React from 'react';
import PropTypes from 'prop-types';
import Global from '../components/Global';
import SiteLayout from '../components/SiteLayout';
import Link from '../components/Link'
import { FormattedMessage } from 'react-intl';

class NotFoundPage extends React.Component {
  render() {
    return (
      <SiteLayout type="bots">
        <Global />
        <div className="center">
          <h1>
            404<br />
            <FormattedMessage id="pages.notfound.message" />
          </h1>
          <Link href="/">
            <FormattedMessage id="pages.notfound.gohome" />
          </Link>
        </div>
      </SiteLayout>
    );
  }
}

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string
  })
};

export default NotFoundPage;
