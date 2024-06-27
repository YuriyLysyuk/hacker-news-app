import { FC } from 'react';

import classes from './StoryList.module.css';

import { Loader } from '../ui';

import type { Stories } from '../../types';
import { StoryItem } from '../../components';

interface IStoryList {
  stories: Stories;
  isLoading: boolean;
  isError: boolean;
}

const StoryList: FC<IStoryList> = (props) => {
  const { stories, isLoading, isError } = props;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2>Ошибка загрузки постов</h2>;
  }

  return (
    <section className={classes.stories}>
      {stories.map((story, index) => (
        <StoryItem key={story.id} story={story} number={index + 1} />
      ))}
    </section>
  );
};

export default StoryList;
