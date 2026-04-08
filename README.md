# Premier League Match Outcome Predictor

A machine learning-powered web application that predicts the results of English Premier League matches (Win, Draw, or Loss) based on historical data.

**GitHub Repository**: https://github.com/AMurtadaa/Premier-league

## Project Overview

This application combines a Gradient Boosting machine learning model with a React.js frontend and Flask API backend to provide data-driven insights for football match predictions. The model achieves approximately 75% accuracy in predicting Premier League match outcomes.

### Intended Users
- Football enthusiasts
- Sports analysts
- Bettors seeking data-driven insights and statistical probabilities

## System Architecture

The project is organized into three main components:

### 1. **Backend (`backend/`)**
   - Machine learning models and data scipting
   - Gradient Boosting model trained on historical EPL data
   - Data preparation and feature engineering
   - Files:
     - `scraping.ipynb` - Web scraping historical match data from FBref
     - `prediction.ipynb` - Model training and evaluation
     - `matches.csv` - Historical match dataset

### 2. **Frontend (`frontend/`)**
   - Next.js React application with TypeScript
   - Interactive UI for team selection and match prediction
   - Prediction probability visualization
   - Responsive design with Tailwind CSS
   - Team logos and match metadata input

### 3. **Flask API (`backend/app.py` - to be integrated)**
   - `/predict` endpoint that accepts home_team and away_team
   - Returns predicted match outcome and probabilities
   - CORS configured for frontend communication

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js and npm
- Git

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/AMurtadaa/Premier-league.git
cd Premier-league
```

#### 2. Set up Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### 3. Set up Frontend
```bash
cd frontend
npm install
npm run build
npm run dev
```

#### 4. Run the Application
- **Frontend**: Open http://localhost:3000
- **Backend**: Start Flask API (instructions to follow)

## Project Milestones

### Week 9-10: Full System Integration ✅
- Implemented `/predict` route in Flask API
- Integrated gradient boosting model with 75% accuracy
- Verified frontend-backend communication via fetch requests
- Configured CORS for local development

### Week 11-12: Local Hosting & GitHub Integration ✅
- Organized project repository structure
- Created comprehensive documentation
- Set up Git version control
- Verified project reproducibility across machines

### Week 13: System Verification ✅
- Tested full system locally
- Verified prediction output for team combinations
- Implemented error handling for invalid inputs
- Ensured consistent model accuracy (~75%)
- Tested end-to-end functionality

## Features

✅ **Match Prediction**: Select home and away teams to predict match outcomes
✅ **Probability Visualization**: Display win/draw/loss probabilities
✅ **Team Selection**: Dropdown selectors with team logos
✅ **Match Details**: Input match time and match day
✅ **Error Handling**: Validation for invalid or incomplete inputs
✅ **Responsive Design**: Works on desktop and mobile devices

## Next Steps

- [ ] Deploy application to production environment
- [ ] Explore XGBoost or LightGBM for accuracy improvements
- [ ] Implement SQLite database layer for prediction history
- [ ] Add match statistics and player performance data
- [ ] Create admin dashboard for model monitoring
- [ ] Prepare final documentation and presentation slides

## Technologies Used

- **Machine Learning**: scikit-learn, pandas, numpy
- **Backend**: Python, Flask
- **Frontend**: React.js, Next.js, TypeScript, Tailwind CSS
- **Data**: CSV, pandas
- **Version Control**: Git, GitHub

## File Structure

```
premier-league/
├── backend/
│   ├── scraping.ipynb          # Data collection notebook
│   ├── prediction.ipynb        # Model training notebook
│   ├── matches.csv             # Historical data
│   └── README.md               # Backend documentation
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx        # Main predictor interface
│   │   │   ├── ResultPage.tsx  # Results display
│   │   │   ├── layout.tsx      # App layout
│   │   │   └── globals.css     # Styles
│   │   └── ...
│   ├── public/
│   │   └── logo/               # Team logos
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
├── README.md                    # This file
├── .gitignore                   # Git ignore rules
└── LICENSE

```

## Model Performance

- **Algorithm**: Gradient Boosting Classifier
- **Accuracy**: ~75%
- **Training Data**: Historical EPL match data
- **Features**: Team statistics, match conditions, form data

## Error Handling

The application handles:
- Empty or incomplete form inputs
- Invalid team selections (same team home/away)
- Missing prediction data
- API communication failures

## Development Notes

- Frontend runs on **localhost:3000**
- Backend API should run on **localhost:5000**
- CORS is configured for local development
- All team logos are sourced from `/public/logo/`

## Future Enhancements

1. **Database Integration**: SQLite for storing prediction history
2. **Model Improvements**: Test XGBoost and LightGBM algorithms
3. **Advanced Analytics**: Display match statistics and confidence intervals
4. **User Authentication**: Track user predictions and betting records
5. **Real-time Updates**: Integration with live match data APIs
6. **Visualization Dashboard**: GraphQL for advanced data querying

## Contact & Contribution

**Author**: Murtadaa Aliu
**GitHub**: https://github.com/AMurtadaa/Premier-league

For questions, suggestions, or contributions, please open an issue or pull request on GitHub.

---

**Last Updated**: April 2026
**Status**: Week 13 Verification Complete ✅
