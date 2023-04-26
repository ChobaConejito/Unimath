function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      /*      
      \|/       -\(((((''''((((((((.
      -*-==//////((''  .     `)))))),
      /|\      ))| o    ;-.    '(((((                                  ,(,
               ( `|    /  )    ;))))'                               ,_))^;(~
                  |   |   |   ,))((((_     _____------~~~-.        %,;(;(>';'~
                  o_);   ;    )))(((` ~---~  `::           \      %%~~)(v;(`('~
                        ;    ''''````         `:       `:::|\,__,%%    );`'; ~
                       |   _                )     /      `:|`----'     `-'
                 ______/\/~    |                 /        /
               /~;;.____/;;'  /          ___--,-(   `;;;/
              / //  _;______;'------~~~~~    /;;/\    /
             //  | |                        / ;   \;;,\
            (<_  | ;                      /',/-----'  _>
             \_| ||_                     //~;~~~~~~~~~
                 `\_|                   (,~~  -Choba
                                         \~\
                                          ~~
                                          */
      localStorage.setItem("player2_name", player2_name);
  
      window.location ="index2.html";
  }
  
  