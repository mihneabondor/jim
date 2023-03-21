function validareRaspuns(event)
{
    if(event.target.id === "corect") {
        event.target.style.background = 'green';
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
        const raspButton=document.getElementById("symb2");
        raspButton.style.visibility="visible";
    } else {
        event.target.style.background = 'red';
    }
}

