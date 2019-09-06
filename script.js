/** You'll see movies, books and tv... we wanted to make a table of stuff with dropdown tables for each category
 * Got a bit too much for end of semester, though so we just left. It worked well too but then we decided on focusing 
 * on just one category and making it look nice through the use of CSS library, Materialize.
 */

window.addEventListener("DOMContentLoaded", function () {
    //temp variables to hold localStorage Data
    var music = {title:null, album:null, artist:null, rating:null, favorite: false};
    
    
    //DOM Elements manipulated
    var container = document.getElementById("inputContainer");
    var form = document.getElementById("inputForm");
    // var moviesForm = document.getElementById("moviesForm");
    // var booksForm = document.getElementById("booksForm");
    var musicForm = document.getElementById("musicForm");
    // var tvForm = document.getElementById("tvForm");
    var musicRating = document.getElementById("musicRatingSlider");
    var favContainer = document.getElementById("favContainer");

    //Buttons
    // var movieBtn = document.getElementById("movieBtn");
    var musicBtn = document.getElementById("musicBtn");
    // var booksBtn = document.getElementById("booksBtn");
    // var tvBtn = document.getElementById("tvBtn");
    var clearBtn = document.getElementById("clearBtn");

    clearBtn.addEventListener("click", function(){ 
        localStorage.clear();
        document.location.reload(true);
    });

    // var type = document.getElementById("type");
    // type.addEventListener("change", function() {
    //     if (type.value == "movies"){
    //         hideInputForm();
    //         showMoviesForm();
    //     }
    //     if (type.value == "music") {
    //         hideInputForm();
    //          showMusicForm(); 
    //     }
    //     if (type.value == "tv"){
    //         hideInputForm();
    //         showTvForm();
    //     }
    //     if (type.value == "books"){
    //         hideInputForm();
    //         showBooksForm();
    //     }
    // });

    musicRating.addEventListener("change", function() {
        if (musicRating.value >= 8) {
            favContainer.style.display = "inline";
        }
        else favContainer.style.display = "none";
    });

    // movieBtn.addEventListener("click", function() {
    //     hideMoviesForm();
    //     showInputForm();
    // });

    musicBtn.addEventListener("click", function() {
        music.title = document.getElementById("musicTitle").value;
        music.album = document.getElementById("musicAlbum").value;
        music.artist = document.getElementById("musicArtist").value;
        music.rating = document.getElementById("musicRatingSlider").value;
        music.favorite = document.getElementById("musicFavorite").checked;

        if (localStorage) {
            musicArray.push(music);
            localStorage.musicArray = JSON.stringify(musicArray);
        }

        console.log(music);
        //hideMusicForm();
        //showInputForm();
    });

    // tvBtn.addEventListener("click", function() {
    //     hideTvForm();
    //     showInputForm();
    // });
    // booksBtn.addEventListener("click", function() {
    //     hideBooksForm();
    //     showInputForm();
    // });

    // // function hideInputForm() {
    // //     form.style.display = "none";
    // // }
    // // function showInputForm() {
    // //     form.style.display = "inline";
    // // }
    // // function showMoviesForm() {
    // //     moviesForm.style.display = "inline";
    // // }
    // function showMusicForm() {
    //     musicForm.style.display = "inline";
    // }
    // function showTvForm() {
    //     tvForm.style.display = "inline";
    // }
    // function showBooksForm() {
    //     booksForm.style.display = "inline";
    // }
    // function hideMoviesForm() {
    //     moviesForm.style.display = "none";
    // }
    // function hideMusicForm() {
    //     musicForm.style.display = "none";
    // }
    // function hideTvForm() {
    //     tvForm.style.display = "none";
    // }
    // function hideBooksForm() {
    //     booksForm.style.display = "none";
    // }

    var musicArray = [];
    
    if (localStorage && localStorage.musicArray) {
        var musicTable = document.getElementById("musicTable");
        var musicTableHehBody = document.getElementById("musicTableHeh").getElementsByTagName('tbody')[0];
        //var rows = musicTableHehBody.rows; var rowsSoFar = (rows==null) ? 0 : rows.length; var newRow = tableRef.insertRow(rowsSoFar);

        var x = document.createElement("IMG");
        x.setAttribute("src", "assets/fav-icon.jpg");
        x.setAttribute("width", "20");
        x.setAttribute("height", "20");
        x.setAttribute("alt", "The Pulpit Rock");

        
        musicArray = JSON.parse(localStorage.musicArray);

        /*Just leaving this here because it's been a long semester and I don't want to code no more.
        We tried to populate the table using jQuery so it would dynamically grab the results from the array.
        From everything I've checked online and how it's typed out below I think I have the correct but it just won't work
        so it's probably missing something. Initially it was just the laziness of implementing the table on the DOM but that turned
        out to be easier than this in the end. That musicTable var is a div in the html we used for testing output.*/
        $.each(musicArray.cart, function(index, value){
            $('#musicTableHeh > tbody:last-child').append(`<tr>
            <td class="songFavorite">${value.favorite}</td>
            <td class="songTitle">${value.title}</td>
            <td class="songArtist">${value.artist}</td>
            <td class="songAlbum">${value.album}</td>
            <td class="songRating">${value.rating}</td>
          </tr>`);
          })
        
        var output = "";
        for (var i=0; i<musicArray.length; i++) {
            var newRow = musicTableHehBody.insertRow();
            if (musicArray[i].favorite == "false")
                newRow.insertCell(0).appendChild(document.createTextNode(""));
            else
                newRow.insertCell(0).appendChild(x);
            newRow.insertCell(1).appendChild(document.createTextNode(musicArray[i].title));
            newRow.insertCell(2).appendChild(document.createTextNode(musicArray[i].artist));
            newRow.insertCell(3).appendChild(document.createTextNode(musicArray[i].album));
            newRow.insertCell(4).appendChild(document.createTextNode(musicArray[i].rating));
        }
    }
});