export default (request, next)  => {
    console.log('Not Found Request: ', request);

    next((response) => {
        console.log('Not Found Response: ', response);
    });
}