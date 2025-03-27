  
from flask import Flask, jsonify  
from flask_cors import CORS  

app = Flask(__name__)  
CORS(app)  

@app.route('/api/biodiversity', methods=['GET'])  
def get_biodiversity_data():  
    data = {  
        "ecosystem_health": "Stable",  
        "species_detected": 42,  
        "invasive_species": 3,  
        "restoration_suggestion": "Plant native trees and remove invasive species"  
    }  
    return jsonify(data)  

if __name__ == '__main__':  
    app.run(debug=True)  
