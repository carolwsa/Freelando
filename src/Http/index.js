import axios from "axios";
import { ArmazenadorToken } from "../Utils/ArmazenadorToken";

const http = axios.create({
  baseURL: "http://localhost:8080",
});

http.interceptors.request.use(
  function (config) {
    const token = ArmazenadorToken.obterAccessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const rotasIgnoradas = ["auth/login", "auth/refresh"];

const tentaRenovarToken = async () => {
  const token = ArmazenadorToken.obterRefreshToken;
  return axios
    .get("http://localhost:8080/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resposta) => {
      ArmazenadorToken.definirTokens(
        resposta.data.access_token,
        resposta.data.refresh_token
      );
    });
};

const lidar401 = async (erro) => {
  await tentaRenovarToken().then(() => {
    http(erro.config);
  });
  return Promise.reject(erro);
};

http.interceptors.response.use(
  (response) => response,
  function (error) {
    if (
      !rotasIgnoradas.includes(error.config.url) &&
      error.response.status === 401
    ) {
      return lidar401(error);
    }
    return Promise.reject(error);
  }
);
export default http;
