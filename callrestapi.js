const url="http://35.223.20.167:8103/api/users";

function postUser() {
    console.log(url);

    const myName = $('#name').val();
    const myEmail = $('#email').val();
    const myAge = $('#age').val();
    const myComments = $('#comments').val();

    const myUser = {
        name: myName,
        email: myEmail,
        age: myAge,
        comments: myComments
    }

    console.log(myUser);
    const options = {
        method: 'POST',
        body: JSON.stringify(myUser),
        mode: 'cors',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    }
    fetch(url, options)
    .then(res => res.json())
    .then(res => console.log(res));

}

function getUsers() {
    console.log(url);
  
    $.getJSON(url,
      function(json) {
         console.log(json);
  
          var arrUsers = json.users;
  
          var htmlTableUsers = '<table border=1">';
  
          arrUsers.forEach(function(item) {
             console.log(item);
             htmlTableUsers += '<tr>' +
                                      '<td>' + item.id + '</td>' +
                                      '<td>' + item.name + '</td>' +
                                      '<td>' + item.email + '</td>' +
                                      '<td>' + item.age + '</td>' +
                                      '<td>' + item.comments + '</td>' +
                                '</tr>';
          });
  
          htmlTableUsers += '</table>';
  
         $('#resultado').html(htmlTableUsers);
  
  
      }
    );
  }
  
  