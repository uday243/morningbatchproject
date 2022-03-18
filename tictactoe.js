let currentPlayer = "X"
const allBoxes = Array.from(document.getElementsByClassName("box"))
let referenece = [null, null, null, null, null, null, null, null, null]
for(let i of allBoxes)
{
    i.addEventListener('click', function(event)
    {
        event.target.innerText = currentPlayer
        let myId = event.target.id
        referenece[myId] = currentPlayer
        checkRow()
        checkCol()
        checkDia()
        if(referenece[myId]!=null)
        {
            console.log("Draw")
        }
        swapPlayer()
    })        
}

function swapPlayer()
{
    if(currentPlayer == "X")
    {
        currentPlayer = "O"
    }
    else if(currentPlayer == "O")
    {
        currentPlayer = "X"
    }
}

function checkRow()
{
    if(referenece[0] == currentPlayer)
    {
        if(referenece[1] == currentPlayer && referenece[2] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
        }
    }
    if(referenece[3] == currentPlayer)
    {
        if(referenece[4] == currentPlayer && referenece[5] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
        }
    }
    if(referenece[6] == currentPlayer)
    {
        if(referenece[7] == currentPlayer && referenece[8] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
        }
    }

}

function checkCol()
{
    if(referenece[0] == currentPlayer)
    {
        if(referenece[3] == currentPlayer && referenece[6] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
        }
    }
    if(referenece[1] == currentPlayer)
    {
        if(referenece[4] == currentPlayer && referenece[7] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
                }
    }
    if(referenece[2] == currentPlayer)
    {
        if(referenece[5] == currentPlayer && referenece[8] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
               }
    }

}

function checkDia()
{
    if(referenece[0] == currentPlayer)
    {
        if(referenece[4] == currentPlayer && referenece[8] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
        }
    }
    if(referenece[2] == currentPlayer)
    {
        if(referenece[4] == currentPlayer && referenece[6] == currentPlayer)
        {
            console.log(currentPlayer+"is the winner")
        }
    }


}




