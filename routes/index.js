const express = require('express');
const router = express.Router();

// Home page (BMI form)
router.get('/BMIForm', function (req, res) {
    res.render('index', { title: 'BMI Calculator' });
});

// Calculate BMI
router.get('/calculate', function (req, res) {
    const height = parseFloat(req.query.height);
    const weight = parseFloat(req.query.weight);

    // Validate the inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        return res.render('errors', {
            message: 'Please enter valid positive numbers for both height and weight.',
        });
    }

    // BMI calculation
    const bmi = (weight / (height * height)).toFixed(2);

    res.render('result', {
        bmi: bmi,
        height: height,
        weight: weight,
    });
});

module.exports = router;