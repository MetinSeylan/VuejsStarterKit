module.exports = [
    {
        request: function (request) {
            return request;
        },

        response: function (response) {
            if (response.status == 401) {
                window.localStorage.clear();
                window.location.href = "auth/login";
            } else if (response.status == 500) {
                alert('Sunucu hatası');
                window.location.reload(true);
            }
            return response;
        }
    }
    // add more
];