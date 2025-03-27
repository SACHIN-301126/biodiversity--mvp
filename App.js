  
import React, { useEffect, useState } from 'react';  
import { Container, Card, CardContent, Typography, CircularProgress } from '@mui/material';  
import './App.css';  

function App() {  
    const [biodiversityData, setBiodiversityData] = useState(null);  

    useEffect(() => {  
        fetch('http://127.0.0.1:5000/api/biodiversity')  
            .then(response => response.json())  
            .then(data => setBiodiversityData(data));  
    }, []);  

    return (  
        <Container className="dashboard">  
            <Typography variant="h3" className="title">AI-Powered Biodiversity Restoration</Typography>  
            {biodiversityData ? (  
                <Card className="data-card">  
                    <CardContent>  
                        <Typography variant="h5">Ecosystem Health: {biodiversityData.ecosystem_health}</Typography>  
                        <Typography variant="h5">Species Detected: {biodiversityData.species_detected}</Typography>  
                        <Typography variant="h5">Invasive Species: {biodiversityData.invasive_species}</Typography>  
                        <Typography variant="h5">Restoration Suggestion: {biodiversityData.restoration_suggestion}</Typography>  
                    </CardContent>  
                </Card>  
            ) : (  
                <CircularProgress className="loading-icon" />  
            )}  
        </Container>  
    );  
}  

export default App;  
