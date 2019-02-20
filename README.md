## Architecture Overview

I have two components here: Images & Image. The Images component is wrapped around a InfiniteScroller component which handles the scrolling. Here I am making fetch requests through axios every time we scroll down to the limit. At every fetch, I am getting 30 images from the unsplash API. 

## Lessons Learnt
- Using InfiniteScroller
- Alternative to Pagination
- More React Practice Without Redux