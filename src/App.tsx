import { useEffect, useState } from 'react';

import './App.css';
import { StoryService } from './api';
import { useFetching } from './hooks';
import { SortBy, Stories } from './types';
import { SortBar, StoryList } from './components';

const App = () => {
  const [stories, setStories] = useState<Stories>([]);
  const [sort, setSort] = useState<SortBy>(SortBy.Topstories);

  const {
    fetching: fetchStories,
    isLoading: isStoriesLoading,
    isError: isStoriesError,
  } = useFetching(async () => {
    const stories = await StoryService.getAllStories(sort);
    setStories(stories);
  });

  useEffect(() => {
    fetchStories();
  }, [sort]);

  return (
    <>
      <header>
        <h1>Hacker News</h1>
      </header>

      <main>
        <SortBar sort={sort} onChangeSort={setSort} />

        <StoryList
          stories={stories}
          isLoading={isStoriesLoading}
          isError={isStoriesError}
        />
      </main>
    </>
  );
};

export default App;
