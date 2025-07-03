document.addEventListener('DOMContentLoaded', function () {
  const eventVideos = document.querySelectorAll('.event-card video');
  let currentIdx = 0;


  eventVideos.forEach((video, i) => {
    if (i === 0) {
      video.currentTime = 0;
      video.play();
      video.style.opacity = '1';
    } else {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0.5';
    }
  });


  eventVideos.forEach((video, idx) => {
    video.addEventListener('click', function () {
      eventVideos.forEach((v, i) => {
        if (i === idx) {
          if (v.muted){
            v.play();
            v.style.opacity = '1';
          }else{
            v.pause()
            v.style.opacity = '0.5';
          }
          v.muted = !v.muted;
        
        } else {
          v.muted = true;
          v.pause();
          v.currentTime = 0;
          v.style.opacity = '0.5';
        }
      });
      currentIdx = idx;
    });
  });
});