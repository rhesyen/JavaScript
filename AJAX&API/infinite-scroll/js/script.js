//scrollHeight, scrollTop, clientHeight

let preloading = false;

const showPreloader = () => {

    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
}

const hidePreloader = () => {

    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

const getData = () => {

    if(!preloading) {
        
        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {

            let body = document.body;
            let hr = document.createElement('hr');
            body.appendChild(hr);

            for (let user of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');

                pId.innerText = `User ID: ${user.id}`;
                pName.innerText = `Name: ${user.name}`;
                pWebsite.innerText = `Website: ${user.website} <br />------------`;

                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);
            }

            preloading = false;

            hidePreloader();
        })
        .catch(error => {
            console.error(error);
        })
    }
    preloading = true;
}

const scrollToEndOfPage = () => {
    
    let endOfPage = 0;
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;  // cala wysokosc scroll elementu, lacznie z rzeczami niewidzialnymi (strony)
    let scrollTop = d.scrollTop;        // ile juz przescrollowane (number of pixels)
    let clientHeight = d.clientHeight;  // wysokosc widocznego okna przegladarki (inner height)
    // zaokraglenie sumy w gore, aby ktos nie utknal w ulamkach pixeli:
    let sumScrollTopClientsHeight = Math.ceil(scrollTop + clientHeight);

    /* console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`SUM: ${sumScrollTopClientsHeight}`);
    console.log('============================'); */

    if (sumScrollTopClientsHeight >= scrollHeight) {
        
        endOfPage += 1;
        //console.log(`Scrolled to the end of page: ${endOfPage}`);

        showPreloader();

        getData();

    }
}

window.addEventListener('scroll', scrollToEndOfPage);