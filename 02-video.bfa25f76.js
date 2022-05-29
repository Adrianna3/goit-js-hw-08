var iframe=document.querySelector("iframe"),player=new Vimeo.Player(iframe);player.on("play",(function(){console.log("played the video!")})),player.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.bfa25f76.js.map
