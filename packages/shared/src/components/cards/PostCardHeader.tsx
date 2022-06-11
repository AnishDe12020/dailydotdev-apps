import classNames from 'classnames';
import React, { ReactElement, ReactNode, useContext } from 'react';
import FeaturesContext from '../../contexts/FeaturesContext';
import { Button } from '../buttons/Button';
import OptionsButton from '../buttons/OptionsButton';
import { CardHeader } from './Card';
import SourceButton from './SourceButton';
import { Source } from '../../graphql/sources';

interface CardHeaderProps {
  children?: ReactNode;
  source: Source;
  onMenuClick?: (e: React.MouseEvent) => void;
}

export const PostCardHeader = ({
  onMenuClick,
  children,
  source,
}: CardHeaderProps): ReactElement => {
  const { postModalByDefault, postEngagementNonClickable } =
    useContext(FeaturesContext);

  return (
    <CardHeader>
      <SourceButton source={source} />
      {children}
      <span
        className={classNames(
          'flex flex-row ml-auto',
          (!postModalByDefault || postEngagementNonClickable) &&
            'laptop:mouse:invisible laptop:mouse:group-hover:visible',
        )}
      >
        {(postModalByDefault || postEngagementNonClickable) && (
          <Button className="mr-2 btn-primary" buttonSize="small">
            Read article
          </Button>
        )}
        <OptionsButton onClick={onMenuClick} tooltipPlacement="top" />
      </span>
    </CardHeader>
  );
};
