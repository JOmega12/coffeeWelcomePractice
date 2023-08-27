import { API_CONFIG } from "./config";

export const getNewCoffee = ({ title, description }) =>
  fetch(API_CONFIG.baseUrl + "/coffee", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ title, description }),
  });
