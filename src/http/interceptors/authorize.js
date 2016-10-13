export default (request, next)  => {

    console.log('Authorize Request: ', request);

    next((response) => {
        console.log('Authorize Response: ', response);
    });
}