import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../config/client";

export const getApiKey = createAsyncThunk("getApiKey", async (email) => {
  const response = await client.get(`/api-key?email=${email}`);
  return response.data.data.apiKey;
});

export const getTask = createAsyncThunk("getTask", async () => {
  const response = await client.get(`/tasks`);
  return response.data;
});

export const postTasks = createAsyncThunk("postTasks", async (body) => {
  const response = await client.post(`/tasks`, body);
  return response.response.ok;
});
