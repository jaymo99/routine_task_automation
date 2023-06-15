document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('camera-preview');
    var captureBtn = document.getElementById('capture-btn');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    
    // Check if the browser supports the getUserMedia API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function (error) {
          console.log('Unable to access the camera:', error);
        });
    }
    
    // Capture button click event handler
    captureBtn.addEventListener('click', function () {
      // Set the canvas dimensions to match the video stream
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw the current video frame onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Get the captured image data as a base64-encoded string
      var imageData = canvas.toDataURL('image/jpeg');
      
      
      // Display the captured image (optional)
      // var img = new Image();
      // img.src = imageData;
      // document.body.appendChild(img);

      fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageData }),
    })
      .then(function (response) {
        if (response.ok) {
          alert('Image uploaded successfully');
        } else {
          alert('Image upload failed');
        }
      })
      .catch(function (error) {
        console.log('Error uploading image:', error);
      });
    });
  });
  