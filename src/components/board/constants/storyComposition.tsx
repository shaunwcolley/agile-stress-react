import { Label } from '../../types';

export const storyComposition = (score: number, stories: Label[]) => {
  if (score < 1000) {
    return stories.slice(0,1);
  }
  if (score >= 1000 && score < 1500) {
    return stories.slice(0,2);
  }
  if (score >= 1500 && score < 2250) {
    return stories.slice(0,3)
  }
  if (score >= 2250 && score < 3000) {
    return stories.slice(0,5)
  }
  if (score >= 3000 && score < 3500) {
    return stories.slice(0,7)
  }
  return stories
};
