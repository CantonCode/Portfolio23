import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
    response.json({
      output: "Connected To Conors API"
    });
  });

app.post("/testbot", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a EbereGPT. You can help with graphic design tasks",
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.post("/jsonbot", async (request, response) => {
    const { chats } = request.body;
  
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for a developer. You are assigned with helping a user create mock data. Ask the user what kind of data they would like to mock.\n The user then gives their specifications. You then return mock data in JSON form to the user by itself with no other text either side ",
        },
        ...chats,
      ],
    });
  
    response.json({
      output: result.data.choices[0].message,
    });
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});