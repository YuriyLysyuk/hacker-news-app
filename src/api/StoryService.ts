import { API_URL } from '../constants';
import { SortBy, Stories, Story } from '../types';

class StoryService {
  static async getAllStories(sort: SortBy, limit = 15, startAt = 0) {
    const url = `${API_URL}${sort}.json?orderBy="$key"&limitToFirst=${limit}&startAt="${startAt}"`;

    const response = await fetch(url);
    const storyIds = await response.json();

    const stories = await Promise.all<Stories>(
      storyIds
        .values()
        .map(async (storyId: Story['id']) => this.getOneStory(storyId))
    );

    return stories;
  }

  static async getOneStory(storyId: Story['id']) {
    const response = await fetch(`${API_URL}item/${storyId}.json`);
    const story: Story = await response.json();

    return story;
  }
}

export default StoryService;
