import { FC } from 'react';

import classes from './StoryItem.module.css';

import { Story } from '../../types';
import { getHostFromUrl } from '../../utils/url';

interface IStoryItem {
  story: Story;
  number: number;
}

const StoryItem: FC<IStoryItem> = ({ story, number }) => {
  const { title, url, score, by, kids } = story;

  const urlHost = getHostFromUrl(url);
  const commentsCount = kids?.length ?? 0;

  return (
    <article className={classes.story}>
      <header className={classes.header}>
        <span>{number}.</span>

        <h2>
          <a className={classes.title} href='#'>
            {title}
          </a>
        </h2>

        {urlHost && (
          <a className={classes.link} href={url} target='_blank'>
            ({urlHost})
          </a>
        )}
      </header>

      <div className={classes.meta}>
        Points: {score} by {by} | Comments: {commentsCount}
      </div>
    </article>
  );
};

export default StoryItem;
