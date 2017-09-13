$(document).ready(function() {

    // array that stores jquery references to spots on the tic tac toe grid
    $grid = [$('#one'), $('#two'), $('#three'), $('#four'), $('#five'), $('#six'), $('#seven'), $('#eight'), $('#nine')];
    // array to keep track of the game
    var grid = ['', '', '', '', '', '', '', '', ''];
    // counter to keep track of how many turns have occurred
    var counter = 0;
    // variables to store user and computers choice of X or O
    var user, computer;

    // prompt user to choose either X or O
    $('.modal').modal();
    // if user chooses X, assign X to variable user and O to variable computer
    $('#X').click(function() {
        user = 'X';
        computer = 'O';
    })
    // if user chooses O, assign O to variable user and X to variable computer
    $('#O').click(function() {
        user = 'O';
        computer = 'X';
    })

    // define function that checks to see if a win has occured after a move
    function win(i) {
        if (grid[0] === i && grid[1] === i && grid[2] === i ||
            grid[3] === i && grid[4] === i && grid[5] === i ||
            grid[6] === i && grid[7] === i && grid[8] === i ||
            grid[0] === i && grid[3] === i && grid[6] === i ||
            grid[1] === i && grid[4] === i && grid[7] === i ||
            grid[2] === i && grid[5] === i && grid[8] === i ||
            grid[0] === i && grid[4] === i && grid[8] === i ||
            grid[2] === i && grid[4] === i && grid[6] === i) {
            return true;
        } else {
            return false;
        }
    }

    // define function that resets relevant variables after a win
    function reset() {
        for (var k = 0, n = $grid.length; k < n; k++) {
            $grid[k].text('');
        }
        grid = ['', '', '', '', '', '', '', '', ''];
        counter = 0;
    }

    // define function that takes in a user's move, checks to see if there are potential winning user moves, and responds with move to block
    function check(x) {
        if (x === 0) {
            if (grid[1] === 'u' && grid[2] === '') {
                return 2;
            } else if (grid[2] === 'u' && grid[1] === '') {
                return 1;
            } else if (grid[4] === 'u' && grid[8] === '') {
                return 8;
            } else if (grid[8] === 'u' && grid[4] === '') {
                return 4;
            } else if (grid[3] === 'u' && grid[6] === '') {
                return 6;
            } else if (grid[6] === 'u' && grid[3] === '') {
                return 3;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 1) {
            if (grid[0] === 'u' && grid[2] === '') {
                return 2;
            } else if (grid[2] === 'u' && grid[0] === '') {
                return 0;
            } else if (grid[4] === 'u' && grid[7] === '') {
                return 7;
            } else if (grid[7] === 'u' && grid[4] === '') {
                return 4;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 2) {
            if (grid[1] === 'u' && grid[0] === '') {
                return 0;
            } else if (grid[0] === 'u' && grid[1] === '') {
                return 1;
            } else if (grid[5] === 'u' && grid[8] === '') {
                return 8;
            } else if (grid[8] === 'u' && grid[5] === '') {
                return 5;
            } else if (grid[4] === 'u' && grid[6] === '') {
                return 6;
            } else if (grid[6] === 'u' && grid[4] === '') {
                return 4;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 3) {
            if (grid[4] === 'u' && grid[5] === '') {
                return 5;
            } else if (grid[5] === 'u' && grid[4] === '') {
                return 4;
            } else if (grid[0] === 'u' && grid[6] === '') {
                return 6;
            } else if (grid[6] === 'u' && grid[0] === '') {
                return 0;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 4) {
            if (grid[3] === 'u' && grid[5] === '') {
                return 5;
            } else if (grid[5] === 'u' && grid[3] === '') {
                return 3;
            } else if (grid[1] === 'u' && grid[7] === '') {
                return 7;
            } else if (grid[7] === 'u' && grid[1] === '') {
                return 1;
            } else if (grid[0] === 'u' && grid[8] === '') {
                return 8;
            } else if (grid[8] === 'u' && grid[0] === '') {
                return 0;
            } else if (grid[2] === 'u' && grid[6] === '') {
                return 6;
            } else if (grid[6] === 'u' && grid[2] === '') {
                return 2;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 5) {
            if (grid[4] === 'u' && grid[3] === '') {
                return 3;
            } else if (grid[3] === 'u' && grid[4] === '') {
                return 4;
            } else if (grid[2] === 'u' && grid[8] === '') {
                return 8;
            } else if (grid[8] === 'u' && grid[2] === '') {
                return 2;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 6) {
            if (grid[0] === 'u' && grid[3] === '') {
                return 3;
            } else if (grid[3] === 'u' && grid[0] === '') {
                return 0;
            } else if (grid[4] === 'u' && grid[2] === '') {
                return 2;
            } else if (grid[2] === 'u' && grid[4] === '') {
                return 4;
            } else if (grid[7] === 'u' && grid[8] === '') {
                return 8;
            } else if (grid[8] === 'u' && grid[7] === '') {
                return 7;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 7) {
            if (grid[4] === 'u' && grid[1] === '') {
                return 1;
            } else if (grid[1] === 'u' && grid[4] === '') {
                return 4;
            } else if (grid[6] === 'u' && grid[8] === '') {
                return 8;
            } else if (grid[8] === 'u' && grid[6] === '') {
                return 6;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else if (x === 8) {
            if (grid[0] === 'u' && grid[4] === '') {
                return 4;
            } else if (grid[4] === 'u' && grid[0] === '') {
                return 0;
            } else if (grid[2] === 'u' && grid[5] === '') {
                return 5;
            } else if (grid[5] === 'u' && grid[2] === '') {
                return 2;
            } else if (grid[7] === 'u' && grid[6] === '') {
                return 6;
            } else if (grid[6] === 'u' && grid[7] === '') {
                return 7;
            } else {
                var r;
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
                return r;
            }
        } else {
            return -1;
        }
    }

    //define function that takes in a user's move, marks it on the grid, and responds with computer's move
    function move(i) {
        // if user's chosen spot hasn't been marked yet
        if (grid[i] === '') {
            // mark chosen spot with user's symbol
            $grid[i].text(user);
            grid[i] = 'u';
            // check if user has won the game
            if (win('u')) {
                $('.modal-body').html('<h2>You Won!</h2>');
                $('.modal-footer').html('<button type="button" class="btn btn-lg" data-dismiss="modal">Ok</button>');
                $('.modal').modal();
                setTimeout(reset, 3000);
                return false;
            }
            // update the counter
            counter++;
            if (counter === 9) {
                $('.modal-body').html('<h2>You Tied...</h2>');
                $('.modal-footer').html('<button type="button" class="btn btn-lg" data-dismiss="modal">Ok</button>');
                $('.modal').modal();
                setTimeout(reset, 3000);
                return false;
            }
            // computer responds buy picking its own spot
            // checks to see if uer has a potential win and returns spot to block win
            var r;
            if (check(i) !== -1) {
                r = check(i);
                // else a random spot should be returned
            } else {
                do {
                    r = Math.floor(Math.random() * 9)
                } while (grid[r] !== '');
            }
            // mark chosen spot with computer's symbol
            $grid[r].text(computer);
            grid[r] = 'c';
            // check if computer has won the game
            if (win('c')) {
                $('.modal-body').html('<h2>You Lost...</h2>');
                $('.modal-footer').html('<button type="button" class="btn btn-lg" data-dismiss="modal">Ok</button>');
                $('.modal').modal();
                setTimeout(reset, 3000);
                return false;
            }
            // update counter
            counter++;
            if (counter === 9) {
                $('.modal-body').html('<h2>You Tied...</h2>');
                $('.modal-footer').html('<button type="button" class="btn btn-lg" data-dismiss="modal">Ok</button>');
                $('.modal').modal();
                setTimeout(reset, 0300);
                return false;
            }
        }
    }

    // if user clicks a certain spot, then execute a move function
    $grid[0].click(function() {
        move(0);
    });
    $grid[1].click(function() {
        move(1);
    });
    $grid[2].click(function() {
        move(2);
    });
    $grid[3].click(function() {
        move(3);
    });
    $grid[4].click(function() {
        move(4);
    });
    $grid[5].click(function() {
        move(5);
    });
    $grid[6].click(function() {
        move(6);
    });
    $grid[7].click(function() {
        move(7);
    });
    $grid[8].click(function() {
        move(8);
    });
})
