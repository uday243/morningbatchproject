var currentPlayer = "X"
var spaces = [null, null, null, null, null, null, null, null, null, ]

const allDiv = Array.from(document.getElementsByClassName("divv"))
allDiv.forEach(function(ele, index)
{
    ele.addEventListener('click', placeInfo)
})

function placeInfo(event)
{
    let myId = event.target.id
    if(!spaces[myId])
    {
        spaces[myId] = currentPlayer
    }
    event.target.innerText = currentPlayer
    if(checkWinner())
    {
        console.log(`${currentPlayer} is the winner`)
    }
    swapPlayer()
}

function checkWinner()
{
    if(spaces[0] == currentPlayer)
    {
        if(spaces[1] == currentPlayer && spaces[2] == currentPlayer)
        {
            return true
        }
    }
    if(spaces[3] == currentPlayer)
    {
        if(spaces[4] == currentPlayer && spaces[5] == currentPlayer)
        {
            return true
        }
    }
    if(spaces[6] == currentPlayer)
    {
        if(spaces[7] == currentPlayer && spaces[8] == currentPlayer)
        {
            return true
        }
    }if(spaces[0] == currentPlayer)
    {
        if(spaces[4] == currentPlayer && spaces[8] == currentPlayer)
        {
            return true
        }
    }
    if(spaces[2] == currentPlayer)
    {
        if(spaces[4] == currentPlayer && spaces[6] == currentPlayer)
        {
            return true
        }
    }
    if(spaces[0] == currentPlayer)
    {
        if(spaces[3] == currentPlayer && spaces[6] == currentPlayer)
        {
            return true
        }
    }
    if(spaces[1] == currentPlayer)
    {
        if(spaces[4] == currentPlayer && spaces[7] == currentPlayer)
        {
            return true
        }
    }
    if(spaces[2] == currentPlayer)
    {
        if(spaces[5] == currentPlayer && spaces[8] == currentPlayer)
        {
            return true
        }
    }
}


function swapPlayer(event)
{
    if(currentPlayer == "X")
    {
        currentPlayer = "O"
    }
    else
    {
        currentPlayer = "X"
    }
}