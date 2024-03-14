// Day 40: I created a popout gallery in my website alexlegard.ca.
// It has three images. When you mouseover them, they grow in size
// and gain a red border. It wasn't that hard, it was fun.

.gallery {
    display:flex;
  }
  
  .gallery-image {
    width:250px;
    height:250px;
    margin-right:25px;
    transition: transform 0.3s, border 0.3s;
  }
  
  .gallery-image:hover {
    transform: scale(1.5);
    border: 5px solid #FF0000;
  }