const { VITE_SERVER_ADRESS, VITE_SERVER_PORT} = import.meta.env
const url = `http://${VITE_SERVER_ADRESS}:${VITE_SERVER_PORT}/`

const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Accept": "application/json"
};

export { url, headers}

