
const getMyId = fetch('https://fwd.innopolis.university/api/hw2?email=i.vasilev@innopolis.university')
    .then(response => {
        return response.json();
    })
    .then(data =>{
        return data
    })


async function fetchComic(){
    const myId = new URLSearchParams()
    myId.append('id', await getMyId)
    const res = fetch('https://fwd.innopolis.university/api/comic?' + myId.toString())
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            const comicTitle = `<p id='comicTitle'>${data.safe_title}</p>`
            const comicDate = `<p id='comicDate'>${new Date(Date.UTC(Number(data.year), Number(data.month), Number(data.day), 0, 0, 0)).toLocaleDateString("en-GB")}</p>`
            const comicPic = `<img src=${data.img} alt=${data.alt} id='comicPic'></img>`
            document.querySelector('.myPopup').insertAdjacentHTML('afterbegin', comicDate)
            document.querySelector('.myPopup').insertAdjacentHTML('afterbegin', comicPic)
            document.querySelector('.myPopup').insertAdjacentHTML('afterbegin', comicTitle)
        }) 
}

wasOpened = false; 

function openPopup(){
    alert("Warning!\n This API is untrusted.\n Are you sure you wanna see the comic?)")
    var popup = document.querySelector('.myPopup');
    popup.style.display = 'block';
    if(wasOpened==false){
        fetchComic()
        wasOpened = true
    }
}

function closePopup(){
    var popup = document.querySelector('.myPopup');
    popup.style.display = 'none';
}
