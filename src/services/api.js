export default function api() {

  const customFetch = (endpoint, options = {}) => {
    const defaultHeader = {
      accept: "application/json",
      "Content-Type": "application/json"
    }

    //Configurar el abortar peticion
    const controller = new AbortController();
    options.signal = controller.signal;

    //Agregar metodo get 
    options.method = options.method || "GET";

    //configurar headers
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader

    //Covertir contenido del body a json 
    // options.body = JSON.stringify(options.body) || false;
    // if (!options.body) delete options.body
    if(options.body) options.body = JSON.stringify(options.body)


    console.log(options)

    //Cancela la petición si el servidor se demora en responder
    setTimeout(() => controller.abort(), 20000)

    return fetch(endpoint, options)
      .then((res) => {
        return res.ok ? res.json() : Promise.reject({
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrió un error"
        })
      })
      .catch((err) => err)
  }


  const get = (url, options = {}) => customFetch(url, options)

  const post = (url, options = {}) => {
    options.method = "POST"
    return customFetch(url, options)
  }

  const put = (url, options = {}) => {
    options.method = "PUT"
    return customFetch(url, options)
  }

  const del = (url, options = {}) => {
    options.method = "DELETE"
    return customFetch(url, options)
  }

  return {
    get,
    post,
    put,
    del,
  }
}