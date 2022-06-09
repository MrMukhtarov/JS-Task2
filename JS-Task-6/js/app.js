function Code(){
    var group = " ";
    var group = document.getElementById('input').value
    var user = document.getElementById('user')

    user.innerHTML = group

    var _us = group.charAt(1)

    if(_us === '1'){    
        user.style.color = 'yellow'
    }
    if(_us === '2'){    
        user.style.color = 'red'
    }
    if(_us === '3'){    
        user.style.color = 'black'
    }
    
}