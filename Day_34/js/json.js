"use strict";
const serverApi = `https://t5tk6k-8080.csb.app`;

export const getTasks = async () => {
  const response = await fetch(`${serverApi}/tasks`);
  const data = await response.json();
  return data;
};

export const getTask = async (id) => {
  const response = await fetch(`${serverApi}/tasks/${id}`);
  const task = await response.json();
  return task;
};

export const postTask = async (data) => {
  const response = await fetch(`${serverApi}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const updateTask = async (data, id) => {
  const response = await fetch(`${serverApi}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteTask = async (id) => {
  const response = await fetch(`${serverApi}/tasks/${id}`, {
    method: "DELETE",
  });
  return response;
};


