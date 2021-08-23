import { memo } from 'react';

import shareIcon from '../../images/share.svg';
import copyIcon from '../../images/copy.svg';

const navigatorHasShare = navigator.share;

const URL = 'https://localhost:3001/';

function Actions({ post, subject }) {
  const { id, title } = post;

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - ${subject}`,
      text: title,
      url: URL,
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(
      `${title} - *Learn more about int* ${URL}/${subject}/${id}`
    );
  };

  const renderActions = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo;

    const icon = navigatorHasShare ? shareIcon : copyIcon;

    return (
      <img src={icon} alt="icon" className="share-icon" onClick={action} />
    );
  };

  return <div className="share">{renderActions()}</div>;
}

export default memo(Actions);
