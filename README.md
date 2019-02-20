## Architecture Overview

I have two components here: Images & Image. The Images component is wrapped around a InfiniteScroller component which handles the scrolling. Here I am making fetch requests through axios every time we scroll down to the limit. At every fetch, I am getting 30 images from the unsplash API. 

I have both the backend and react front end here. 

### Backend
Its a node server which just listens to the 'api/photos' endpoint. The server is running in local host 5000. 

### Frontend
Its a react frontend which is in the client folder. Here I am using a proxy in the package.json to make a backend call to my server running at 5000. 

## Lessons Learnt
- Using InfiniteScroller
- Alternative to Pagination
- Integrating both frontend and backend on the same machine
- Using proxy in package.json of frontend to make backend calls more readable
- More React Practice Without Redux