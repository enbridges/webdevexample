let list = [];
let temp = [];
function addTodo()
{
    let hold = document.getElementById('newTodo').value;
    list.push(hold);
    let text = "";
        let i = 0;
        while (i< list.length)
        {
            text += "<br>" + "<li id='"+ i + "'>" + list[i] + "<input class='smallbutton' onclick='removeTodo(" +i+ ")' id='"+ i + "' value='X'></input>" + "</li>";
            i++;
        }
        document.getElementById("todos").innerHTML = text;
}

function removeTodo(itemid)
{
    // move all elements over to temp without the item
    let j = 0;
    while (j < list.length)
    {
        if (j==itemid)
        {
            j++; // skip the item
        }
        else
        {
            temp.push(list[j]); // place the value in temp
            j++;
        }
    }

    // reduce the number of elements in list
    list.pop();

    // move the new array back into list
    let k = 0;
    while (k < temp.length)
    {
        list[k]=temp[k]; // put elements back into list without removed variable
        k++;
    }

   // clear the temp array just in case
   temp = []

    // display the list array to the user
    let text = "";
        let i = 0;
        while (i< list.length)
        {
            text += "<br>" + "<li>" + list[i] + "<input class='smallbutton' onclick='removeTodo(" +i+ ")' id='remove' value='X'></input>" + "</li>";
            i++;
        }
        document.getElementById("todos").innerHTML = text;
}
