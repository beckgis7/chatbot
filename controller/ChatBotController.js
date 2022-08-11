const WA = require("../helpers/whatsapp-send-msg");

exports.index = (req, res) => {
    // test contents
    let contents = {
        title: 'Get Started',
        body: 'Hell this is contents one.'
    }
    // dashboard view
    res.render("dashboard", { data: contents });
}

exports.send = (req, res) => {
    res.send(`<h1>Welcome My Page ${req.params.id}</h1>`);
}

// Route for WhatsApp
exports.whatsapp = (req, res) => {
    let LEVEL=0
    let name
    let policy_start
    let policy_end
    let policy_number

    let message = req.body.Body;
    let senderID = req.body.From;
    
    const questions = [
        { level: 1, body: "Hi, Welcome to the RP Phone Insure Bot. Let's start by giving me your Full Name", action: null },
        { level: 2, body: "Please enter your email address?" },
        { level: 3, body: "Please enter the Brand Name of the Mobile Phone you want to ensure", action: null },
        { level: 4, body: "Please enter the Model", action: null },
        { level: 5, body: "Please enter the year of Manufacture?", action: null },
        { level: 6, body: "Would you like to add a Aesthetics Insurance Cover?", action: null },
        { level: 7, body: "If the user choose 1", action: ['yes', 'no'] },
        { level: 8, body: "Please send pictures of the phone in its current state", action: null },
        {
            level: 9, body: [
                'Based on the information you have given us your premium will be GHS 150',
                'Please click on the link below to complete payment:',
                'https://pay.paystack.com/c08acf26365e4c7991f69a2d191ed8ab/direct',
            ], action: null
        },
        {
            level: 6, body: [
                `Hi ${name}, your payment has been processed successfully and is vaild from ${policy_start} to ${policy_end}.`,
                `Your policy number is ${policy_number}.`,
            ]
        },
    ]
    // test contents

        
        console.log(message);
        console.log(senderID);

        // Initial Messge to Welcome Message
    switch (message) {
        case message:
            // Check = async () => {
            
            //  }
                LEVEL = +1
                WA.sendMessage(questions[LEVEL].body, senderID);
                res.send(questions[LEVEL].body);
            
            break;
        default:
            WA.sendMessage(questions[LEVEL].body, senderID);
            res.send(questions[LEVEL].body);
    }
}