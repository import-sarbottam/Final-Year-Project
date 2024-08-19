import tensorflow as tf
from PIL import Image
import numpy as np
from skimage import transform

classes = ['Covid-19', 'No Disease', 'Pneumonia', 'Tuberculosis']
model = tf.keras.models.load_model(r'static/my_model.h5')

def predict_disease(filename):
   np_image = Image.open(filename)
   np_image = np.array(np_image).astype('float32')/255
   np_image = transform.resize(np_image, (400, 400, 3))
   np_image = np.expand_dims(np_image, axis=0)
   prediction = model.predict(np_image)
   return classes[prediction.argmax()]