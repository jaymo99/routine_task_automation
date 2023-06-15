import base64
import uuid

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    image_data = request.json.get('image')

    # Generate unique identifier
    unique_id = str(uuid.uuid4())
    file_name = f"{unique_id}.jpg"

    # Save the image to a folder
    with open(f"images\{file_name}", 'wb') as f:
        decoded_image = base64.b64decode(image_data.split(',')[1])
        f.write(decoded_image)


    return 'Image uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)

