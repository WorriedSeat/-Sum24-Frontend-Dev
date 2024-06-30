import {formatDistanceToNow} from 'date-fns';

interface IdResponseData{
    id:string
}

interface ComicResponseData{
    safe_title: string
    alt: string
    img: string
    year: number
    month: number
    day: number
}

declare global {
    interface Window {
      openPopup: any;
      closePopup: any;
    }
  }

async function fetchComic(): Promise<void>{
    const getMyId = await fetch('https://fwd.innopolis.university/api/hw2?email=i.vasilev@innopolis.university')
    .then((response: Response) =>{
        return response.json()
    })
    const myId: IdResponseData = {id: getMyId.toString()}
    const params = new URLSearchParams()
    params.append('id', myId.id)

    const getMyComic = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
    .then((response: Response)=>{
        return response.json()
    })
    const myComic: ComicResponseData = getMyComic
    
    const comicTitle: string = `<p id='comicTitle'>${myComic.safe_title}</p>`;
    const comicDate: string = `<p id='comicDate'>${new Date(Date.UTC(myComic.year, myComic.month, myComic.day, 0, 0, 0)).toLocaleDateString("en-GB")}</p>`;
    const comicDateFrom: string = `<p id = 'comicDateFrom'>${formatDistanceToNow(new Date(myComic.year, myComic.month, myComic.day))} ago</p>`
    const comicPic: string = `<img src=${myComic.img} alt=${myComic.alt} id='comicPic'></img>`;
    document.querySelector('.myPopup')!.insertAdjacentHTML('afterbegin', comicDateFrom);
    document.querySelector('.myPopup')!.insertAdjacentHTML('afterbegin', comicPic);
    document.querySelector('.myPopup')!.insertAdjacentHTML('afterbegin', comicTitle);
}

let wasOpened: boolean = false; 

function openPopup(): void {
    alert("Warning!\n This API is untrusted.\n Are you sure you wanna see the comic?)");
    const popup: HTMLElement = document.querySelector('.myPopup')!;
    popup.style.display = 'block';
    if(wasOpened == false){
        fetchComic();
        wasOpened = true;
    }
}

function closePopup(): void {
    const popup: HTMLElement = document.querySelector('.myPopup')!;
    popup.style.display = 'none';
}

window.closePopup = closePopup
window.openPopup = openPopup