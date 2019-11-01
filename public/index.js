const rootElement = document.querySelector('body');
let inputElement;
let sendButtonElement;
let commentsListElement;

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

    commentsListElement.classList.add('comments');

    rootElement.appendChild(commentsListElement);

    const commentItem = generateComment({
        author: 'Nataliia',
        text: 'Test comment',
        id: '12123',
        date: '2019-10-31T22:21:42.880Z'
    });

    commentsListElement.appendChild(commentItem);
}

function generateComment(commentObject) {
    const commentElement = document.createElement('li');
    const authorElement = document.createElement('p');
    const textElement = document.createElement('p');
    const dateElement = document.createElement('p');
    const deleteButtonElement = document.createElement('button');


    commentElement.classList.add('comments__item');
    authorElement.classList.add('comments__author');
    textElement.classList.add('comments__text');
    dateElement.classList.add('comments__date');
    deleteButtonElement.classList.add('comments__delete');

    authorElement.innerText = commentObject.author;
    textElement.innerText = commentObject.text;
    dateElement.innerText = commentObject.date;
    commentElement.id = commentObject.id;
    deleteButtonElement.innerText = 'Delete';

    commentElement.appendChild(authorElement);
    commentElement.appendChild(textElement);
    commentElement.appendChild(dateElement);
    commentElement.appendChild(deleteButtonElement);

    return commentElement;
}

inputRender();
commentsListRender();


