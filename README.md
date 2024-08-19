# Lung Disease Classification Using Transfer Learning

This repository contains the code and resources for classifying lung diseases using transfer learning. The model is capable of identifying pneumonia, COVID-19, and tuberculosis from chest X-ray images with an impressive 93% accuracy on the test set.

## Dataset

The dataset used for this project can be found on Kaggle: [Chest X-Ray: Pneumonia, COVID-19, Tuberculosis](https://www.kaggle.com/datasets/jtiptj/chest-xray-pneumoniacovid19tuberculosis). It contains labeled X-ray images for multiple lung diseases.

## Project Structure

- **Final_Notebook_FYP.ipynb**: This Jupyter Notebook contains all the necessary code for data preprocessing, model training using transfer learning, and evaluation. It includes the steps to achieve a test accuracy of 93% on the provided dataset.
  
- **frontend/**: This folder contains the code for the frontend interface of the project, built using Vite.
  
- **fyp/**: This folder contains the backend code written in Django, which handles the server-side logic and API endpoints for the project.

- **requirements.txt**: This file lists all the Python dependencies needed to run the notebook and the backend server.

## Getting Started

### Prerequisites

Make sure you have Python, Node.js, and npm installed on your system.

### Installing Dependencies

1. **Python Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Frontend Dependencies**:
   Navigate to the `frontend` directory and install the required dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running the Project

1. **Backend Server**:
   - Navigate to the `fyp` directory.
   - Run the Django development server:
     ```bash
     python manage.py runserver
     ```

2. **Frontend**:
   - Navigate to the `frontend` directory.
   - Start the Vite development server:
     ```bash
     npm run dev
     ```

### Usage

After starting the servers, you can access the frontend interface in your browser, where you can upload chest X-ray images to classify lung diseases using the trained model.

### Acknowledgments

This project is part of my final year project, aimed at leveraging machine learning techniques to aid in the detection of lung diseases. Special thanks to the contributors of the dataset used in this project.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.