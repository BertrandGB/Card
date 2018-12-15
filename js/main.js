//Test that everything's OK
console.log("JS is started");

    console.log("function entered");

    var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'data.json';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';

    request.send();
    request.onload = function() {
        var data = request.response;
    //    populateHeader(superHeroes);
        showCards(data);
        console.log(JSON.stringify(data));
        console.log(data);
    }
console.log(header);
console.log(section);

/*
<div class="card">
    <div class="card-header"></div>
    <div class="card-body">
        <div class="row align-items-center">
            <div class="col" style="border-right:1px solid black">a</div>
            <div class="col">b</div>
        </div>
    </div>
</div>
*/
    function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

    function showCards(jsonObj) {
    for (var i = 0; i < jsonObj.length; i++) {
        var myArticle = document.createElement('div');
            myArticle.className ='col xl-2 lg-3 md-4';
        var card = document.createElement('div');
            card.className='card';
        var card_header = document.createElement('div');
            card_header.className='card-header';
        var card_body = document.createElement('div');
            card_body.className='card-body'
        var row = document.createElement('div');
            row.className='row align-items-center';
        var col_left = document.createElement('div');
            col_left.className='col';
            col_left.style='border-right:1px solid black';
        var col_right = document.createElement('div');
            col_right.className='col';
        col_left.textContent=jsonObj[i].left;
        col_right.textContent=jsonObj[i].right;


        row.appendChild(col_left);
        row.appendChild(col_right);
        card_body.appendChild(row);
        card.appendChild(card_header);
        card.appendChild(card_body);
        myArticle.appendChild(card);

        document.getElementById('row').appendChild(myArticle);
    }
}
/*        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }*/
