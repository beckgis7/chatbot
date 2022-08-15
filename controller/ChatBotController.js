const WA = require("../helpers/whatsapp-send-msg");
const Question = require("../model/question");
const Policy = require("../model/insurance-policy");
var sess;

// const quesSchema = require('../helpers/question-schema')

exports.index = (req, res) => {

    if (req.session.page_views) {
        req.session.page_views++;
        res.cookie('lvl', 1)
        res.send("You visited this page " + req.session.page_views + " times");
        console.log('Cookies: ', req.cookies.level);
    } else {
        req.session.page_views = 1;
        res.cookie('lvl', 1)
        res.send("Welcome to this page for the first time!");
        console.log('Cookies: ', req.cookies.level);
    }
}

exports.insert = (req, res) => {

    // const connectToMongoDB = async () => {
    //     await mongo().then(async (mongoose) => {
    //         try {
    //             console.log('Connected to mongodb!')

    //             // Inserting multiple documents
    //             await quesSchema.insertMany([
    //                 {
    //                     email: 'test1@email.com',
    //                     username: 'test 1',
    //                     password: 'passsword',
    //                 },
    //                 {
    //                     email: 'test2@email.com',
    //                     username: 'test 2',
    //                     password: 'passsword',
    //                 },
    //                 {
    //                     email: 'test3@email.com',
    //                     username: 'test 3',
    //                     password: 'passsword',
    //                 },
    //             ])
    //         } finally {
    //             mongoose.connection.close()
    //         }
    //     })
    // }

    // connectToMongoDB()
}

// Route for WhatsApp
exports.whatsapp = async (req, res) => {
    res.cookie('lvl', "1")
    // let LEVEL = 1
    let LEVEL = req.cookies.lvl
    let name
    let policy_start
    let policy_end
    let policy_number

    let message = req.body.Body;
    let senderID = req.body.From;
    
    // const questions = [
    //     { level: 1, body: "Hi, Welcome to the RP Phone Insure Bot. Let's start by giving me your Full Name", action: null },
    //     { level: 2, body: "Please enter your email address?", action: null },
    //     { level: 3, body: "Please enter the Brand Name of the Mobile Phone you want to ensure, eg: iphone 1234567890", action: null },
    //     { level: 4, body: "Please enter the Model", action: null },
    //     { level: 5, body: "Please enter the year of Manufacture?", action: null },
    //     { level: 6, body: "Would you like to add a Aesthetics Insurance Cover?", action: null },
    //     { level: 7, body: "If the user choose 1", action: ['yes', 'no'] },
    //     { level: 8, body: "Please send pictures of the phone in its current state", action: null },
    //     {
    //         level: 9, body: [
    //             'Based on the information you have given us your premium will be GHS 150',
    //             'Please click on the link below to complete payment:',
    //             'https://pay.paystack.com/c08acf26365e4c7991f69a2d191ed8ab/direct',
    //         ], action: null
    //     },
    //     {
    //         level: 6, body: [
    //             `Hi ${name}, your payment has been processed successfully and is vaild from ${policy_start} to ${policy_end}.`,
    //             `Your policy number is ${policy_number}.`,
    //         ]
    //     },
    // ]
    const questions = Question.find({ question:data }).exec();
    // test contents

        
        console.log("POST DATA",req.body);
        // console.log(message);
        // console.log(senderID);

        // Initial Messge to Welcome Message
    // switch (message) {
    //     case undefined:
    //         // Check = async () => {
            
    //         //  }
    //             // LEVEL = +1
    //             WA.sendMessage(questions[LEVEL].body, senderID);
    //             res.send(questions[LEVEL].body);
            
    //         break;
    //     default:
    //         WA.sendMessage(questions[LEVEL].body, senderID);
    //         res.send(questions[0].body);
    // }

    if (message != null) {
        console.log(LEVEL);
        switch (LEVEL) {
            case "1":
                let name = message.trim().split(" ");
                if (name[1]) {
                    (req.cookies.msg==message) ? '':res.cookie('lvl', "2")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: questions[LEVEL] });
                    // res.send(questions[LEVEL].body);
                } else {
                    (req.cookies.msg==message) ? '':res.cookie('lvl', "1")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: { level: 1, body: `You only (${name[0]}), Please enter First name and Last name, eg: Kofi Annan` } });
                    // res.send(`You only ${name[0]}, Please enter First name and Last name - ${LEVEL}`);
                }
                break;
        
            case "2":
                let validator = require("email-validator");
                if (validator.validate(message)) {
                    (req.cookies.msg==message) ? '':res.cookie('lvl', "3")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: questions[LEVEL] });
                } else {
                    (req.cookies.msg==message) ? '':res.cookie('lvl', "2")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: { level: 2, body: `Please enter a valid email` } });
                    // res.send(`You only ${name[0]}, Please enter First name and Last name - ${LEVEL}`);
                }
                break;

            case "3":
                let brand = message.trim().split(" ");
                if (brand[1]) {
                    (req.cookies.msg == message) ? '' : res.cookie('lvl', "4")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: questions[LEVEL] });
                } else {
                    (req.cookies.msg == message) ? '' : res.cookie('lvl', "3")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: { level: 3, body: `You only (${brand[0]}), Please enter Brand name and Mobile Phone, eg: iphone 1234567890` } });
                    // res.send(`You only ${name[0]}, Please enter First name and Last name - ${LEVEL}`);
                }
                break;

            case "4":
                (req.cookies.msg==message) ? '':res.cookie('lvl', "5")
                res.cookie('msg', message)
                res.render("dashboard", { sender: req.From,length:questions.length, data: questions[LEVEL] });
                break;

            case "5": 
                let yearValidation = require("../helpers/year-validator");
                if (yearValidation(message)) {
                    (req.cookies.msg ==message) ? '':res.cookie('lvl', "6")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: questions[LEVEL] });
                } else {
                    (req.cookies.msg == message) ? '' : res.cookie('lvl', "2")
                    res.cookie('msg', message)
                    res.render("dashboard", { sender: req.From,length:questions.length, data: { level: 5, body: `Please enter a valid email` } });
                    // res.send(`You only ${name[0]}, Please enter First name and Last name - ${LEVEL}`);
                }
                break;

            case "6":
                (req.cookies.msg == message) ? '' : res.cookie('lvl', "7")
                res.cookie('msg', message)
                res.render("dashboard", { sender: req.From, length: questions.length, data: questions[LEVEL] });
                break;
            
        }
        const result = new Policy({
                    "firstname": req.cookies.firstname,
                    "lastname": req.cookies.lastname,
                    "email": req.cookies.email,
                    "brand": req.cookies.brand,
                    "phone_type": req.cookies.phone_type,
                    "model": req.cookies.model,
                    "manufactured_year": req.cookies.manufactured_year,
                    "aesthetics_insurance": req.cookies.aesthetics_insurance,
                    "picture": req.cookies.firstname,
                });
        result.save().then(() => { console.log("Successfully saved") });
        

    } else if (!message || message == "") {
        res.render("dashboard", { sender: req.From,length:questions.length, data: questions[0] });
        // res.send(questions[0].body);
    }
}