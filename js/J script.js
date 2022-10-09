
                //Verify VAriables

var bookMarkName = document.getElementById("bookMarkName");
var siteUrl = document.getElementById("siteUrl");

var bookMarks;

                //Request if there is Data Before

if (localStorage.getItem("myBooks") == null)
{
    bookMarks = [];
    
}
else
{
    bookMarks = JSON.parse(localStorage.getItem("myBooks"));
    display();

}

                //ADD New Product

function addBookMark()
{
    var BookMk=
    {
        name : bookMarkName.value,
        url : siteUrl.value,
    }
    bookMarks.push(BookMk);
    display();
    localStorage.setItem("myBooks",JSON.stringify(bookMarks));
    clearform();
}

                //Clear Data Entered

function clearform()
{
    bookMarkName.value="",
    siteUrl.value=""
}

                //Disply BookMks

function display()
{
    var index = ``;

    for(var i =0 ; i< bookMarks.length ; i++)
    {
        index += `<div class="d-inline-block col-12 mb-3">
        <h3 id="bookName" class="mx-5 d-inline-block">${bookMarks[i].name}</h3>
        <a href="${bookMarks[i].url}" target="_blank" class="btn btn-primary mr-3 d-inline-block">visit</a>
        <button onclick="deletebookms(${i})" class="btn btn-danger d-inline-block">Delete</button>
        </div>`;
    }
    document.getElementById("list").innerHTML = index ;

}

                //Delete BookMks

function deletebookms(booksDelted)
{
    bookMarks.splice(booksDelted,1);
    localStorage.setItem("myBooks",JSON.stringify(bookMarks));

    display();
}