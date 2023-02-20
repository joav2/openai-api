const openai = require("./openAI");

const classificacao = async function classificacao(text, subText) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(text, subText),
        temperature: 1.0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    return response.data.choices[0].text;
}

function generatePrompt(text, subText) {
    return `
    ${text}
    ${subText}
    `
}

module.exports = classificacao;