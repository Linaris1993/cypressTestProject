/// <reference types="Cypress" />

it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
        console.log(response)
    })
})

it.skip('Example sending the POST request with expect verification of response', () => {
    const requestBody = {
        action:"info",
        phone:"+380686979712",
        amount: 50,
        currency:"UAH",
        cardCvv:"111",
        cardExp:"0526",
        card:"4552331448138217",
        xref:"e44c8aa6d3d978824c4f1539a2c80300",
        _:1676150382104,
    };

    const headersData = {
        cookie: 
       '_ga=GA1.2.411179372.1673144045; _gid=GA1.2.797668230.1675911744; pubkey=1b2a8b5569a44288c064f21fdfdd8508; lfp=1/7/2023, 9:14:17 PM; pa=1676150234171.87160.004732570614995435next.privat24.ua0.7393231854422795+1'
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    })
        .then((response) => {
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')

        //could be a loop for () and then
        //expect(response.body.data[i]).to.have.property('amount').to.equal('50.0')
        console.log(response)
    });
 });

 
it.only('Example sending the POST request with should verification of response', () => {
    const requestBody = {
        action:"info",
        phone:"+380686979712",
        amount: 50,
        currency:"UAH",
        cardCvv:"111",
        cardExp:"0526",
        card:"4552331448138217",
        xref:"e44c8aa6d3d978824c4f1539a2c80300",
        _:1676150382104,
    };

    const headersData = {
        cookie: 
       '_ga=GA1.2.411179372.1673144045; _gid=GA1.2.797668230.1675911744; pubkey=1b2a8b5569a44288c064f21fdfdd8508; lfp=1/7/2023, 9:14:17 PM; pa=1676150234171.87160.004732570614995435next.privat24.ua0.7393231854422795+1'
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    })
    //its - работает с обьектами, которые возвращает предыдущая функция
    .its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
});