const socket = io();
const btn = document.getElementById('btn-submit');
const btnMensaje = document.getElementById('btn-submit-mensaje');

const inputTitle = document.getElementById('input-title');
const inputPrice = document.getElementById('input-price');
const inputImg = document.getElementById('input-img');

btnMensaje.addEventListener('click', (evt) => {
    evt.preventDefault();
    const email = document.getElementById('input-email').value;
    const mensaje = document.getElementById('input-mensaje').value;
    
    if (email !== '' && mensaje !== '') {
    
        socket.emit('nuevoMensaje', {
            "email" : email,
            "message" : mensaje,
            "date" : new Date().toLocaleString()
        })
    }
    
})


btn.addEventListener('click', (evt) => {
    
    const title = inputTitle.value;
    const price = inputPrice.value;
    const img = inputImg.value;
    
    if (title !== '' && price !== '' && img !== '') {
        socket.emit('productoAgregado',{
            "title": title,
            "price": price,
            "thumbnail": img
        })
    }
    
    
})

socket.on('listaMensajesActualizada', (data) => {
    console.log(data);
    $('#historial-mensajes').empty();
    data.forEach( (mensaje) => {
        $('#historial-mensajes').append(
        `
        <small style="display:block"> - <em style="color:#9f9f9f">[${mensaje.date}]</em> <strong style="color:green">${mensaje.email}</strong>: ${mensaje.message} </small>
        `
        )
    })
})

socket.on('listaMensajesBienvenida', (data) => {
    console.log(data);
    $('#historial-mensajes').empty();
    data.forEach( (mensaje) => {
        $('#historial-mensajes').append(
        `
        <small style="display:block"> - <em style="color:#9f9f9f">[${mensaje.date}]</em> <strong style="color:green">${mensaje.email}</strong>: ${mensaje.message} </small>
        `
        )
    })
})

socket.on('listaActualizada', (data) => {
    $('#table-body').empty();
    data.forEach( (element) => {
    
        $('#table-body').append(
        `
        <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.price}</td>
            <td>${element.thumbnail}</td>
        </tr>
        `
        )
    })
    
})

socket.on('bienvenidoLista', (data) => {
    $('#table-body').empty();
    data.forEach( (element) => {
    
        $('#table-body').append(
        `
        <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.price}</td>
            <td>${element.thumbnail}</td>
        </tr>
        `
        )
    })
    
})