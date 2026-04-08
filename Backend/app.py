from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import json

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    """
    Predict match outcome based on home and away team.
    Expected JSON input: {"home_team": "Team Name", "away_team": "Team Name"}
    Returns: {"prediction": "Win/Draw/Loss", "probabilities": {...}}
    """
    try:
        data = request.get_json()
        home_team = data.get('home_team')
        away_team = data.get('away_team')

        if not home_team or not away_team:
            return jsonify({'error': 'Missing home_team or away_team'}), 400

        if home_team == away_team:
            return jsonify({'error': 'Home team and away team cannot be the same'}), 400

        # Prepare features for prediction
        # This would depend on your model's feature encoding
        features = prepare_features(home_team, away_team)

        # Make prediction
        prediction = model.predict(features)
        probabilities = model.predict_proba(features)

        return jsonify({
            'home_team': home_team,
            'away_team': away_team,
            'prediction': prediction[0],
            'probabilities': {
                'win': float(probabilities[0][1]),
                'draw': float(probabilities[0][0]),
                'loss': float(probabilities[0][2])
            }
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def prepare_features(home_team, away_team):
    """
    Encode team names and prepare feature vectors for model prediction.
    This function should be adapted based on your model's training features.
    """
    # TODO: Implement feature encoding based on your model
    pass

if __name__ == '__main__':
    app.run(debug=True, port=5000)
