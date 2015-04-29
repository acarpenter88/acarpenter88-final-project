var myPix = new Array("img/cisco.jpg", "img/dell.jpg", "img/HPlefthand.jpg", "img/HPproliant.jpg", "img/vmware.jpg", "img/windows.jpg");
var thisPic = 0;

function processPrevious() {
     if (document.images && thisPic > 0) {
          thisPic--;
          document.myPicture.src = myPix[thisPic];
     }
}

function processNext() {
     if (document.images && thisPic < 5) {
          thisPic++;
          document.myPicture.src = myPix[thisPic];
     }
}