import { Label } from '../../types';

export const storyComposition = (score: number, stories: Label[]) => {
  if (score < 500) {
    return stories.slice(0,1);
  }
  if (score >= 500 && score < 1250) {
    return stories.slice(0,2);
  }
  if (score >= 1250 && score < 2000) {
    return stories.slice(0,3)
  }
  if (score >= 2000 && score < 2750) {
    return stories.slice(0,5)
  }
  if (score >= 2750 && score < 3500) {
    return stories.slice(0,7)
  }
  return stories
};
