const rootElement = document.querySelector('body');
let inputElement;
let sendButtonElement;
let commentsListElement;
let commentElement;
let authorElement;
let textElement;
let dateElement;
let deleteButtonElement;

function inputRender() {
    inputElement = document.createElement('textarea');
    sendButtonElement = document.createElement('button');

    sendButtonElement.classList.add('send');
    sendButtonElement.innerText = 'Send';

    rootElement.appendChild(inputElement);
    rootElement.appendChild(sendButtonElement);
}


function commentsListRender() {
    commentsListElement = document.createElement('ul');
    commentElement = document.createElement('li');
    authorElement = document.createElement('p');
    textElement = document.createElement('p');
    dateElement = document.createElement('p');
    deleteButtonElement = document.createElement('button');

    commentsListElement.classList.add('comments');
    commentElement.classList.add('comments__item');
    authorElement.classList.add('comments__author');
    textElement.classList.add('comments__text');
    dateElement.classList.add('comments__date');
    deleteButtonElement.classList.add('comments__delete');
    deleteButtonElement.innerText = 'Delete';

    rootElement.appendChild(commentsListElement);
    commentElement.appendChild(authorElement);
    commentElement.appendChild(textElement);
    commentElement.appendChild(dateElement);
    commentElement.appendChild(deleteButtonElement);
    commentsListElement.appendChild(commentElement);
}

inputRender();
commentsListRender();


