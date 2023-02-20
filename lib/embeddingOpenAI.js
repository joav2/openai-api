const openai = require("./openAI");

const embedding = async function embedding() {
    const response = await openai.createEmbedding({
        model: "text-embedding-ada-002",
        input: "The food was delicious and the waiter...",
    });

    return response.data;
}

module.exports = embedding;