// Today is the first time I've opened my React meal app in a while,
// so it took me a few minutes just to get my bearings.

// I was looking into caching images that I fetched from the Meal DB
// API. I was hoping to lessen the load on the Meal DB API and even
// improve performance of my React app. I was watching and reading
// several tutorials related to caching and lazy loading, such as:

// https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/

// https://www.youtube.com/watch?v=8viWcH5bUE4&t=383s

// I could store images in localStorage, but the problem with that is
// localStorage has limited space and if I store a bunch of images
// there, I'll simply run out of space.

// Lazy loading means the page only loads results as the user sees
// them. My page only displays recipes 10 at a time, so it doesn't
// take that long to load 10 images from the API. Also, there's a lot
// of text content so the webpage appears to the user to be a complete
// webpage even before all of the images finish loading.

// I could also do nothing. The benefits would be really small, and
// I have some more important tasks I need to get done, so I really
// can't be bothered anymore.