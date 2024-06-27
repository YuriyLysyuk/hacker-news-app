export enum SortBy {
  Topstories = 'topstories',
  Newstories = 'newstories',
  Beststories = 'beststories',
}

export enum ItemType {
  Story = 'story',
}

export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: Comments;
  score: number;
  time: number;
  title: string;
  type: ItemType.Story;
  url: string;
}

export type Stories = Story[];

export interface Comment {}

export type Comments = Comment[];
