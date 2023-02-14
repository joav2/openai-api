const openai = require("./openAI");

const pergunte = async function pergunte(text, subText) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(text, subText),
        max_tokens: 500,
        temperature: 0.5,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ""
    });

    return response.data.choices[0].text;
}

function generatePrompt(text, subText) {
    return `
    ${text}
    ${subText}
    `
}

module.exports = pergunte;