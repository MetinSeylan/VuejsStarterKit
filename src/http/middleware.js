module.exports = function(router){
    router.beforeEach(function (transition) {
        var market = localStorage.getItem('market')
        if (transition.to.auth) {
            if (!market || market === null) {
                localStorage.removeItem('market');
                transition.redirect('/markets')
            }
        }
        transition.next()
    })
};