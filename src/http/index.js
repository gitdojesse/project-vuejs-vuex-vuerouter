import Vue from "vue";
import VueResource from "vue-resource";
import interceptors from "./interceptors";
import services from "./services";

Vue.use(VueResource);

const http = Vue.http;

http.options.root = "https://guarded-headland-11685.herokuapp.com/";

http.interceptors.push(interceptors);

Object.keys(services).map(service => {
  services[service] = Vue.resource("", {}, services[service]);
});

const setBarerToken = token => {
  http.headers.common["Authorization"] = `Barer ${token}`;
};

export default services;
export { http, setBarerToken };
