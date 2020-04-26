class EasyHTTP {
  // Http GET method
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // POST HTTP Method
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // PUT HTTP Method
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  }

  // Http DELETE method
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    const resData = await "Data is deleted...";
    return resData;
  }
}
