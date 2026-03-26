import { useState, useEffect } from 'react';

const useAIAnalysis = (mealData) => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAIAnalysis = async () => {
            try {
                // Replace with your AI meal analysis API endpoint
                const response = await fetch('https://api.your-ai-service.com/analyze', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(mealData),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAnalysis(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAIAnalysis();
    }, [mealData]);

    return { analysis, loading, error };
};

export default useAIAnalysis;